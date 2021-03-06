/*
 * jarTT: A turntable.fm mod. Chris "inajar" Vickery <chrisinajar@gmail.com>
 * javascript:(function(){$.getScript('https://raw.github.com/chrisinajar/jarTT/master/jarTT.js');})();
 *
 * Redistribution and use in source, minified, binary, or any other forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *  * Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 *  * Neither the name, jarTT, nor the names of its contributors may be 
 *    used to endorse or promote products derived from this software without
 *    specific prior written permission.
 *
 * No disclaimer, just don't be a dick.
 *
 */
 
// modulebrowser
 
jarTT.modulebrowser = {
	load: function() {
	},
	unload: function() {
	},
	showModuleBrowser: function() {
		var box = jarTT.ui.createBox();
		
		box.width(600);
		
		box.append("<h1>jarTT Modules</h1>");
		box.append($("<center />")
			.append("<p style='width:400px;font-size: 14px;'>Browse and install modules to jarTT. These modules will be preserved between sessions</p>")
			.append("<p style='width:400px;font-size: 14px;'>This module system is in its infancy. Use at your own risk, and please don't use it while DJing. You might need to F5.</p>")
		);
		var modules = jarTT.modulebrowser.modules,
			mod_ar = [],
			mods_enabled = jarTT.storage.getNamedData('modules');
		mods_enabled=mods_enabled?mods_enabled:[];
		
		for (var mod in modules) {
			jarTT.log('testing ' + mod);
			if (!modules[mod].options)
				modules[mod].options = {};
			if (modules[mod].options.required) // don't bother showing any of the modules that aren't optional
				continue;
			jarTT.log('testing ' + mod);
			mod_ar.push(mod);
			var checked = ($.inArray(mod, mods_enabled) != -1);
			
			box.append("<br />");
			box.append($("<p>", {
				text: mod,
				css: {
					fontSize: '16px',
					fontWeight: checked?"bold":"none"
				}
			}).append($("<input />",
				{
					'type': 'checkbox',
					'checked': checked,
					css: {
						marginLeft: '4px'
					}
				}).click(function() {
					this.checked;
				})
			));
		}
	}
}
