const roseChart = {
    setOption: function(element, option){
        let semicircle = element.getContext('2d');
        // 位移到圆心，方便绘制
        semicircle.translate(option.center.x, option.center.y);
        this.setChart(option, semicircle);
        this.setWords(option, semicircle);
    },
    setChart: function(option, semicircle){
        let start = Math.PI, end = Math.PI;
        for(let i = 0; i < option.data.length; i++){
            end +=  Math.PI / option.data.length; // 终止角度

            let limit = option.scale.number - Math.round(option.data[i].percent / 100 * option.scale.number);

            for(let j = 1; j <= option.scale.number; j++){
                if(j > limit){
                    // 开始一条新路径
                    semicircle.beginPath();
                    // 移动到圆心
                    semicircle.moveTo(0, 0);
                    semicircle.fillStyle = option.scale.color[0];
                    semicircle.strokeStyle = option.border.color;
                    semicircle.lineWidth = option.border.width;
                    semicircle.arc(0, 0, option.radius - j * option.scale.width, start, end);
                    // 闭合路径
                    semicircle.fill();
                    semicircle.closePath();
                    semicircle.stroke();
                }else if(j == limit){
                    // 开始一条新路径
                    semicircle.beginPath();
                    // 移动到圆心
                    semicircle.moveTo(0, 0);
                    semicircle.fillStyle = option.scale.color[1];
                    semicircle.strokeStyle = option.border.color;
                    semicircle.lineWidth = option.border.width;
                    semicircle.arc(0, 0, option.radius - j * option.scale.width, start, end);
                    // 闭合路径
                    semicircle.fill();
                    semicircle.closePath();
                    semicircle.stroke();
                }else{
                    // 开始一条新路径
                    semicircle.beginPath();
                    // 移动到圆心
                    semicircle.moveTo(0, 0);
                    semicircle.fillStyle = option.scale.color[2];
                    semicircle.strokeStyle = option.border.color;
                    semicircle.lineWidth = option.border.width;
                    semicircle.arc(0, 0, option.radius - j * option.scale.width, start, end);
                    // 闭合路径
                    semicircle.fill();
                    semicircle.closePath();
                    semicircle.stroke();
                }
            }

            start =  end; // 起始角度
        }
    },
    setWords: function(option, semicircle){
        let angle;
        for(let i = 0; i < option.data.length; i++){
            if(i == 0){
                angle = Math.PI + Math.PI / option.data.length / 2;
            }else{
                angle = Math.PI + Math.PI / option.data.length / 2 + Math.PI / option.data.length * i; // 30°
            }
            semicircle.save();
            semicircle.translate(Math.cos(angle) * option.words.radius + option.words.canvas.x, Math.sin(angle) * option.words.radius + option.words.canvas.y);
            semicircle.font = option.words.fontStyle;
            semicircle.fillStyle = option.words.color[0];
            semicircle.fillText(option.data[i].name, option.words.x, -6);
            semicircle.font = option.words.fontStyle;
            semicircle.fillStyle = option.words.color[1];
            semicircle.fillText(option.data[i].percent + "%", option.words.x, 14);
            semicircle.restore();
        }
    }
}