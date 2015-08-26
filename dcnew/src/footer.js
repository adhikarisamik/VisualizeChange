dc_leaflet.d3 = d3;
dc_leaflet.crossfilter = crossfilter;
dc_leaflet.dc = dc;

return dc_leaflet;
}
    if (typeof define === 'function' && define.amd) {
        define(["dc"], _dc_leaflet);
    } else if (typeof module == "object" && module.exports) {
        var _dc = require('dc');
        module.exports = _dc_leaflet(_dc);
    } else {
        this.dc_leaflet = _dc_leaflet(dc);
    }
}
)();
