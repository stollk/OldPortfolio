$(document).ready(function() {
  //settings for fullpage.js
  var slideIndexS = 0,
    sliding = false;
  $('#fullpage').fullpage({
  animateAnchor:true,
  recordHistory:true,
  menu:false,
  menu: '#nav',
  anchors: ['a'],
  normalScrollElements: '#nav',
  sectionSelector: '.vertical-scrolling',
  slideSelector: '.horizontal-scrolling',
  paddingTop: 0,
  paddingBottom: 0,
  responsiveWidth: 640,
  css3: true,
  scrollBar: true,
    onSlideLeave: function(slideIndex, nextIndex, direction){
      if (nextIndex == 1) {
          barGraph1();
          barGraph2();
          barGraph3();
      }
    },
  });
});
$(document).ready(function(){
	$('.projector').click(function(){
		$('.screen').slideToggle('slow');
		$(this).toggleClass('active');
		return false;
	});
});
$(document).keydown(function(){
		$('.screen').slideToggle('slow');
		$(this).toggleClass('active');
		return false;
});
$(document).ready(function(){
	$('.footerContent, .contact').click(function(){
		$('.panel').slideToggle('fast');
		$(this).toggleClass('active');
		return false;
	});
});
function barGraph1(){
  d3.select('#wrapper').selectAll('*').remove();
  var HorizontalBarGraph = function(el, series) {
    this.el = d3.select(el);
    this.series = series;
  };

  HorizontalBarGraph.prototype.draw = function() {
    var x = d3.scale.linear()
      .domain([0, d3.max(this.series, function(d) { return d.value })])
      .range([0, 100]);

    var segment = this.el
      .selectAll('.horizontal-bar-graph-segment')
        .data(this.series)
      .enter()
        .append('div').classed('horizontal-bar-graph-segment', true);

    segment
      .append('div').classed('horizontal-bar-graph-label', true)
        .text(function(d) { return d.label });

    segment
      .append('div').classed('horizontal-bar-graph-value', true)
        .append('div').classed('horizontal-bar-graph-value-bar', true)
          .style('background-color', function(d) { return d.color })
          .text(function(d) { return d.inner_label ? d.inner_label : '' })
          .transition()
            .duration(1000)
            .style('min-width', function(d) { return x(d.value) + '%' });

  };

  var graph = new HorizontalBarGraph('#wrapper', [
    {label: 'JavaScript', value: 167, color: '#6ea6df' },
    {label: 'PHP',   value: 343,  color: '#84c26d' },
    {label: 'HTML',   value: 224,  color: '#e17a69' },
    {label: 'CSS',   value: 224,  color: '#e17a69' }
  ]);
  graph.draw();
}
/////////////////////////////////////////////////////////////////////////////////////barGraph2////////////////////////////////////////////////////////////////////////////////////////////////
function barGraph2(){
  d3.select('#wrapper2').selectAll('*').remove();
  var HorizontalBarGraph = function(el, series) {
    this.el = d3.select(el);
    this.series = series;
  };

  HorizontalBarGraph.prototype.draw = function() {
    var x = d3.scale.linear()
      .domain([0, d3.max(this.series, function(d) { return d.value })])
      .range([0, 100]);

    var segment = this.el
      .selectAll('.horizontal-bar-graph-segment')
        .data(this.series)
      .enter()
        .append('div').classed('horizontal-bar-graph-segment', true);

    segment
      .append('div').classed('horizontal-bar-graph-label', true)
        .text(function(d) { return d.label });

    segment
      .append('div').classed('horizontal-bar-graph-value', true)
        .append('div').classed('horizontal-bar-graph-value-bar', true)
          .style('background-color', function(d) { return d.color })
          .text(function(d) { return d.inner_label ? d.inner_label : '' })
          .transition()
            .duration(1000)
            .style('min-width', function(d) { return x(d.value) + '%' });

  };

  var graph = new HorizontalBarGraph('#wrapper2', [
    {label: 'WordPress', value: 167, color: '#6ea6df' },
    {label: 'Illustrator',   value: 343,  color: '#84c26d' },
    {label: 'Photoshop',   value: 224,  color: '#e17a69' }
  ]);
  graph.draw();
}
/////////////////////////////////////////////////////////////////////////////////////barGraph3////////////////////////////////////////////////////////////////////////////////////////////////
function barGraph3(){
  d3.select('#wrapper3').selectAll('*').remove();
  var HorizontalBarGraph = function(el, series) {
    this.el = d3.select(el);
    this.series = series;
  };
  HorizontalBarGraph.prototype.draw = function() {
    var x = d3.scale.linear()
      .domain([0, d3.max(this.series, function(d) { return d.value })])
      .range([0, 100]);

    var segment = this.el
      .selectAll('.horizontal-bar-graph-segment')
        .data(this.series)
      .enter()
        .append('div').classed('horizontal-bar-graph-segment', true);

    segment
      .append('div').classed('horizontal-bar-graph-label', true)
        .text(function(d) { return d.label });

    segment
      .append('div').classed('horizontal-bar-graph-value', true)
        .append('div').classed('horizontal-bar-graph-value-bar', true)
          .style('background-color', function(d) { return d.color })
          .text(function(d) { return d.inner_label ? d.inner_label : '' })
          .transition()
            .duration(1000)
            .style('min-width', function(d) { return x(d.value) + '%' });

  };

  var graph = new HorizontalBarGraph('#wrapper3', [
    {label: 'MySQL', value: 167, color: '#6ea6df' },
    {label: 'phpMyAdmin',   value: 143,  color: '#84c26d' },
  ]);
  graph.draw();
}
