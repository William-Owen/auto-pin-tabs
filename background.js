// Function to extract the hostname from a URL
function getHostname(url) {
	return new URL(url).hostname;
}

// Function to pin a tab if its domain is in the list of domains to pin
function pinTabIfDomainMatches(tab) {
	chrome.storage.local.get(['domainsToPin'], function(result) {
		const domainsToPin = result.domainsToPin || [];
		if (domainsToPin.includes(getHostname(tab.url))) {
			chrome.tabs.update(tab.id, { pinned: true });
		}
	});
}

// Load domains to pin from the 'Startup' folder in bookmarks
function loadDomainsToPin() {
	chrome.bookmarks.search({ title: 'Startup' }, function(bookmarks) {
		for (let bookmark of bookmarks) {
			if (bookmark.url) {
				continue;
			}
			chrome.bookmarks.getChildren(bookmark.id, function(children) {
				let domainsToPin = children.map(child => getHostname(child.url));
				chrome.storage.local.set({ domainsToPin: domainsToPin });
			});
			break;
		}
	});
}

// Call loadDomainsToPin on startup
loadDomainsToPin();

// Listener for tab updates
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
	if (changeInfo.status === 'complete' && tab.url) {
		pinTabIfDomainMatches(tab);
	}
});

// Listener to reload domains when bookmarks are changed
chrome.bookmarks.onChanged.addListener(loadDomainsToPin);
chrome.bookmarks.onCreated.addListener(loadDomainsToPin);
chrome.bookmarks.onRemoved.addListener(loadDomainsToPin);
