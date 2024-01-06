# Chrome Extension: Auto Pin Tabs Extension

## Description

The Auto Pin Tabs extension for Google Chrome automatically pins tabs that match predefined domain names. These domain names are fetched from a designated "Startup" folder in the Chrome bookmarks manager, allowing for easy customization and updates.

This extension was something I wanted to create for my own needs and so it may have limited utility for others. There maybe other similar scripts in the chrome store, however I am uncomfortable using most third party chrome extensions. 

## Features

*   **Automatic Pinning**: Automatically pins tabs that have URLs matching any of the domains specified in the "Startup" bookmarks folder.
*   **Dynamic Domain List**: The list of domains to pin is fetched dynamically from your Chrome bookmarks, ensuring flexibility and ease of management.
*   **Real-Time Updates**: Listens to bookmark changes, automatically updating the list of domains to pin without needing to restart the browser.

## Installation

1.  Download and unpack the extension files.
2.  Open Google Chrome and navigate to `chrome://extensions/`.
3.  Enable "Developer mode" at the top-right corner.
4.  Click "Load unpacked" and select the directory containing the extension files.
5.  Ensure you have a bookmarks folder named "Startup" with the desired domain URLs.

## Usage

Once installed, the extension works automatically. Any tab opened with a URL that matches the domains specified in the "Startup" folder will be pinned automatically.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author
William Owen (wo.dev)