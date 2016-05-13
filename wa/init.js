"use strict";

window.wa = {};

wa.wctx = new walContext();
wa.ctx = wa.wctx.ctx;
wa.composition = wa.wctx.createComposition();

wa.composition.onended( gs.stop );
wa.analyser = wa.ctx.createAnalyser();
wa.analyser.fftSize = 1024;
wa.wctx.filters.pushBack( wa.analyser );
wa.analyserArray = new Uint8Array( wa.analyser.frequencyBinCount );
