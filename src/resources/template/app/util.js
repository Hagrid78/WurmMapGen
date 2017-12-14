'use strict';

WurmMapGen.util = {
	yx: L.latLng,
	xy: function(x, y) {
		return WurmMapGen.util.yx(-(y / WurmMapGen.config.xyMulitiplier), (x / WurmMapGen.config.xyMulitiplier));
	},

	/**
	 * Gets a boolean value from a settings cookie
	 * @param  {string}   key           The key of the setting
	 * @param  {boolean}  defaultValue  Value to return if there is no
	 *                                  setting of this name
	 *
	 * @returns  {boolean}  The boolean value associated with the cookie
	 */
	getConfig: function(key, defaultValue) {
		var val = Cookies.get('wmg_setting_' + key);
		if (val === undefined) { return defaultValue; }
		return (val === 'true'); // Cookies are stored as strings
	},

	/**
	 * Sets a settings cookie with a boolean value
	 * @param  {string}  key     The key of the setting
	 * @param  {boolean}  value  The value to set the cookie to
	 */
	setConfig: function(key, value) {
		Cookies.set('wmg_setting_' + key, value, {expires: Infinity});
	}
};
