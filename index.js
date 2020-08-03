const index = {
    init: function(){
        this.setRoseChart();
    },
    setRoseChart: function(){
        let option = {
            center: {
                x: 600,
                y: 300
            },
            data: [{
                name: '鄂',
                percent: 50.2
            },{
                name: '粤',
                percent: 16.6
            },{
                name: '川',
                percent: 10.4
            },{
                name: '京',
                percent: 9.9
            },{
                name: '苏',
                percent: 8.2
            },{
                name: '其他',
                percent: 3.2
            }],
            radius: 200,
            scale: {
                number: 15,
                color: ['#303030', '#26E2E3', '#141414'],
                width: 12
            },
            border: {
                color: '#000',
                width: 2
            },
            words: {
                radius: 220,
                canvas: {
                    x: -230,
                    y: 0
                },
                fontStyle: '14px scans-serif',
                color: ['#FFF', '#26E2E3'],
                x: 210
            }
        };
        roseChart.setOption(document.getElementById("canvas"), option);
    }
};
index.init();