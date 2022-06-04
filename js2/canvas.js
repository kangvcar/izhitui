(function drawRadar() {
    var chartDom = document.getElementById('radar');
    var myChart = echarts.init(chartDom);
    var option;

    option = {
        color:['#25476a','#00FF00'],
        legend: {
            data: ['Allocated Budget', 'Actual Spending']
        },
        radar: {
            // shape: 'circle',
            indicator: [
                { name: '学习方法', max: 6500 },
                { name: '分析力', max: 16000 },
                { name: '创造力', max: 30000 },
                { name: '逻辑思维', max: 38000 },
                { name: '识别力', max: 52000 },
                { name: '决策力', max: 25000 }
            ]
        },
        series: [
            {
                name: 'Budget vs spending',
                type: 'radar',
                data: [
                    {
                        value: [5200, 10000, 20000, 35000, 50000, 18000],
                        // name: 'Allocated Budget'
                    },
                ]
            }
        ]
    };
    option && myChart.setOption(option);
})();
//画金字塔
(function drawFunnel() {
    var chartDom = document.getElementById('funnel');
    var myChart = echarts.init(chartDom);
    var option;
    option = {
        color:['#E55A55','#5AAEF4','#61D9AC'],
        legend: {
            data: ["意志", "认知", "性格"],
        },
        series: [            
            {
                name: "Funnel",
                type: "funnel",
                left: "10%",
                top: 30,
                bottom: 30,
                width: "70%",
                min: 0,
                max: 100,
                minSize: "0%",
                maxSize: "100%",
                sort: "descending",
                gap: 2,
                label: {
                    show: true,
                    position: "inside",
                },
                labelLine: {
                    length: 10,
                    lineStyle: {
                        width: 1,
                        type: "solid",
                    },
                },
                itemStyle: {
                    borderColor: "#fff",
                    borderWidth: 1,
                },
                emphasis: {
                    label: {
                        fontSize: 20,
                    },
                },
                data: [
                    { value: 66.7, name: "认知" },

                    { value: 33.4, name: "性格" },

                    { value: 100, name: "意志" },
                ],
            },
        ],
    };
    option && myChart.setOption(option);
})();
//画饼图
(function drawPieChart() {
    var chartDom = document.getElementById("piechart")
    var myChart = echarts.init(chartDom);
    var option;

    option = {
        color:['#E55A55','#5AAEF4','#61D9AC','#A8E0FB','#5B6E96'],
        tooltip: {
            trigger: "item",
        },
        legend: {
            top: "5%",
            left: "center",
        },
        series: [
            {
                name: "Access From",
                type: "pie",
                radius: ["40%", "70%"],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: "center",
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: "40",
                        fontWeight: "bold",
                    },
                },
                labelLine: {
                    show: false,
                },
                data: [
                    { value: 1000, name: "团结协商" },
                    { value: 1000, name: "诚实" },
                    { value: 1000, name: "细心" },
                    { value: 1000, name: "责任心" },
                    { value: 1000, name: "认真" },
                ],
            },
        ],
    };

    option && myChart.setOption(option);
})();
//画条形图
(function drawBar() {
    var chartDom = document.getElementById('bar');
    var myChart = echarts.init(chartDom);
    var option;

    option = {
        color: [
            // '#c23531',
            // '#2f4554',
            'rgba(0, 32, 62, 0.8)',
            '#25476a',
            '#61a0a8',
            '#d48265',
            '#91c7ae',
            '#749f83',
            '#ca8622',
            '#bda29a',
            '#6e7074',
            '#546570',
            '#c4ccd3'
            ],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['中学数学老师', '中学历史老师','中学物理老师', '中学化学老师', '中学语文老师', '高中语文老师', '小学语文老师', '中学政治老师'],
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: 'Direct',
                type: 'bar',
                barWidth: '45%',
                data: [10, 52,100, 200, 334, 390, 330, 220]
            }
        ]
    };

    option && myChart.setOption(option);
})()