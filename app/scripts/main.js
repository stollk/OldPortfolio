$(document).ready(function() {
  //settings for fullpage.js
  $('#fullpage').fullpage({
    animateAnchor:true,
    recordHistory:true,
    menu:false,
    menu: '#nav',
    anchors: ['a'],
    normalScrollElements: '#nav',
    scrollHorizontally:true,
    sectionSelector: '.vertical-scrolling',
    slideSelector: '.horizontal-scrolling',
    paddingTop: 0,
    paddingBottom: 0,
    responsiveWidth: 640,
    css3: true,
    scrollBar: true,
    onSlideLeave: function(slideIndex, nextIndex, direction){
            if (nextIndex == 1) {
            barGraph();
          }
    }
  });
});
/*
$(function() {
	$('ul.nav a').bind('click',function(event){
		var $anchor = $(this);

		if you want to use one of the easing effects:
		$('html, body').stop().animate({
			scrollLeft: $($anchor.attr('href')).offset().left
		}, 1500,'easeInOutExpo');

		$('html, body').stop().animate({
			scrollLeft: $($anchor.attr('href')).offset().left
		}, 1000);
		event.preventDefault();
	});
});*/
function barGraph() {
  d3.select('#wrapper').selectAll('*').remove();
//function bargraph must wrap this in a function and then call the function so it loads when the section is scrolled to
  var categories= ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'];

  var dollars = [213,209,190,179,156];

  var colors = ['#0000b4','#0082ca','#0094ff','#0d4bcf','#0066AE'];

  var grid = d3.range(25).map(function(i){
    return {'x1':0,'y1':0,'x2':0,'y2':480};
  });

  var tickVals = grid.map(function(d,i){
    if(i>0){ return i*10; }
    else if(i===0){ return '100';}
  });

  var xscale = d3.scale.linear()
          .domain([10,250])
          .range([0,722]);

  var yscale = d3.scale.linear()
          .domain([0,categories.length])
          .range([90,490]);

  var colorScale = d3.scale.quantize()
          .domain([0,categories.length])
          .range(colors);

  var canvas = d3.select('#wrapper')
          .append('svg')
          .attr({'width':900,'height':550});

/*	var grids = canvas.append('g')
            .attr('id','grid')
            .attr('transform','translate(150,10)')
            .selectAll('line')
            .data(grid)
            .enter()
            .append('line')
            .attr({'x1':function(d,i){ return i*30; },
               'y1':function(d){ return d.y1; },
               'x2':function(d,i){ return i*30; },
               'y2':function(d){ return d.y2; },
            })
            .style({'stroke':'#adadad','stroke-width':'0px'});*/

  var	xAxis = d3.svg.axis();
    /*xAxis
      .orient('bottom')
      .scale(xscale)*/
      /* .tickValues(tickVals); originally*/

  var	yAxis = d3.svg.axis();
      yAxis
      .orient('left')
      .scale(yscale)
      .tickFormat(function(d,i){ return categories[i]; })
      .tickValues(d3.range(6));

  var y_xis = canvas.append('g')
            .attr('transform', 'translate(150,0)')
            .attr('id','yaxis')
            .call(yAxis);

  var x_xis = canvas.append('g')
            .attr('transform', 'translate(150,480)')
            .attr('id','xaxis')
            //removed x axis

  var chart = canvas.append('g')
            .attr('transform', 'translate(150,0)')
            .attr('id','bars')
            .selectAll('rect')
            .data(dollars)
            .enter()
            .append('rect')
            .attr('height',35) /*height of bars*/
            .attr({'x':0,'y':function(d,i){ return yscale(i)+19; }})
            .style('fill',function(d,i){ return colorScale(i); })
            .attr('width',function(d){ return 0; });


  var transit = d3.select('#wrapper').select('svg').selectAll('rect')
              .data(dollars)
              .transition()
              .duration(1500)
              .attr('width', function(d) {return xscale(d); });

/*  var transitext = d3.select('#bars')
            .selectAll('text')
            .data(dollars)
            .enter()
            .append('text')
            .attr({'x1':function(d,i){ return xscale(i)-'y'; },'y':function(d,i){ return yscale(i)+42; }})
            .text(function(d){ return d; }).style({'fill':'#fff','font-size':'18px','text-align':'left','font-weight':'bold'});*/
};
