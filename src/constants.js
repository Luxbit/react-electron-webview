import { PropTypes } from 'react';

export const events = [
	'load-commit',
	'did-attach',
	'did-finish-load',
	'did-fail-load',
	'did-frame-finish-load',
	'did-start-loading',
	'did-stop-loading',
	'did-get-response-details',
	'did-get-redirect-request',
	'dom-ready',
	'page-title-set',
	'page-favicon-updated',
	'enter-html-full-screen',
	'leave-html-full-screen',
	'console-message',
	'new-window',
	'close',
	'ipc-message',
	'crashed',
	'gpu-crashed',
	'plugin-crashed',
	'destroyed',
];

export const methods = [
	'loadURL',
	'getURL',
	'getTitle',
	'isLoading',
	'isWaitingForResponse',
	'stop',
	'reload',
	'reloadIgnoringCache',
	'canGoBack',
	'canGoForward',
	'canGoToOffset',
	'clearHistory',
	'goBack',
	'goForward',
	'goToIndex',
	'goToOffset',
	'isCrashed',
	'setUserAgent',
	'getUserAgent',
	'insertCSS',
	'executeJavaScript',
	'openDevTools',
	'closeDevTools',
	'isDevToolsOpened',
	'isDevToolsFocused',
	'inspectElement',
	'inspectServiceWorker',
	'setAudioMuted',
	'isAudioMuted',
	'undo',
	'redo',
	'cut',
	'copy',
	'paste',
	'pasteAndMatchStyle',
	'delete',
	'selectAll',
	'unselect',
	'replace',
	'replaceMisspelling',
	'insertText',
	'findInPage',
	'stopFindInPage',
	'print',
	'printToPDF',
	'capturePage',
	'send',
	'sendInputEvent',
	'setZoomFactor',
	'setZoomLevel',
	'showDefinitionForSelection',
	'getWebContents',
	'focus'
];

export const props = {
	src: PropTypes.string,
	autosize: PropTypes.bool,
	nodeintegration: PropTypes.bool,
	plugins: PropTypes.bool,
	preload: PropTypes.string,
	httpreferrer: PropTypes.string,
	useragent: PropTypes.string,
	disablewebsecurity: PropTypes.bool,
	partition: PropTypes.string,
	allowpopups: PropTypes.bool,
	blinkfeatures: PropTypes.string,
	disableblinkfeatures: PropTypes.string,
	guestinstance: PropTypes.number,
	devtools: PropTypes.bool,
	muted: PropTypes.bool,
};

export const changableProps = {
	src: '__USE_ATTR__',
	useragent: 'setUserAgent',
	guestinstance: '__USE_ATTR__',
	devtools: 'setDevTools',
	muted: 'setAudioMuted',
};
