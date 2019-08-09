/// 
import 'jquery.flot';
import 'jquery.flot.selection';
import 'jquery.flot.time';
import 'jquery.flot.stack';
import 'jquery.flot.stackpercent';
import 'jquery.flot.fillbelow';
import 'jquery.flot.crosshair';
import './jquery.flot.events';

declare class GraphElement{
	ctrl: any;
	tooltip: any;
	dashboard: any;
	annotations: object[];
	panel: any;
	plot: any;
	sortedSeries: any[];
	data: any[];
	panelWidth: number;
	eventManager: any;
	thresholdManager: any;
	timeRegionManager: any;
	legendElem: HTMLElement;

	constructor(scope: any, elem: any, timeSrv: any);

}

export { GraphElement }