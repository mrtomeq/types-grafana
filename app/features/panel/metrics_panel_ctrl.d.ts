/// 
import { PanelCtrl } from './panel_ctrl';
import { DataFrame } from '@grafana/data';

declare class MetricsPanelCtrl extends PanelCtrl {
    loading: boolean;
    datasource: any;
    datasourceName: any;
    $q: any;
    $timeout: any;
    datasourceSrv: any;
    timeSrv: any;
    templateSrv: any;
    timing: any;
    range: any;
    rangeRaw: any;
    interval: any;
    intervalMs: any;
    resolution: any;
    timeInfo: any;
    skipDataOnInit: boolean;
    dataStream: any;
    dataSubscription: any;
    constructor($scope: any, $injector: any);
    private onInitMetricsPanelEditMode();
    private onMetricsPanelRefresh();
    setTimeQueryStart(): void;
    setTimeQueryEnd(): void;
    updateTimeRange(): void;
    calculateInterval(): void;
    applyPanelTimeOverrides(): void;
    issueQueries(datasource: any): any;
    handleQueryResult(result: any): void;
    handleDataStream(stream: any): void;
    setDatasource(datasource: any): void;
    getAdditionalMenuItems(): any[];
    explore(): void;
    addQuery(target: any): void;
    removeQuery(target: any): void;
	moveQuery(target: any, direction: number): void;
	dataFormat: string;
	handleDataFrames(data: DataFrame[]);
}
export { MetricsPanelCtrl };
