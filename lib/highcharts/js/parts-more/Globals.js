var arrayMin = Highcharts.arrayMin,
	arrayMax = Highcharts.arrayMax,
	each = Highcharts.each,
	extend = Highcharts.extend,
	merge = Highcharts.merge,
	map = Highcharts.map,
	pick = Highcharts.pick,
	pInt = Highcharts.pInt,
	defaultPlotOptions = Highcharts.getOptions().plotOptions,
	seriesTypes = Highcharts.seriesTypes,
	extendClass = Highcharts.extendClass,
	splat = Highcharts.splat,
	wrap = Highcharts.wrap,
	Axis = Highcharts.Axis,
	Tick = Highcharts.Tick,
	Point = Highcharts.Point,
	Pointer = Highcharts.Pointer,
	CenteredSeriesMixin = Highcharts.CenteredSeriesMixin,
	TrackerMixin = Highcharts.TrackerMixin,
	Series = Highcharts.Series,
	math = Math,
	mathRound = math.round,
	mathFloor = math.floor,
	mathMax = math.max,
	Color = Highcharts.Color,
	noop = function () {},
	UNDEFINED;