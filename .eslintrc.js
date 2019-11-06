module.exports = {
	"env": {
		"browser": true,
		"node": true
	},
	"parser": "babel-eslint",
	"extends": ["standard", "standard-react"],
	"rules": {
	"react/prop-types": [0],
	"max-len": [2, 130, 4, {"ignoreUrls": true}],
	"new-cap": "off"
	}
};
