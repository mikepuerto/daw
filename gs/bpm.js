"use strict";

gs.bpm = function( bpm ) {
	if ( !arguments.length ) {
		return gs._bpm;
	}
	gs._bpm = Math.max( 20, Math.min( bpm, 999 ) );
	ui.bpm( gs._bpm );
	
	ui.samples.forEach( function( s ) {
		// We don't have to call .updateCSS_when, the samples doesn't move when the BPM changes.
		s.wsample.when = s.xem / ui.BPMem;
		s.updateCSS_width();
		s.updateCSS_offset();
	});
};
