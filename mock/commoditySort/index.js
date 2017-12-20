module.exports=function(commodityData,type) {
    if(type=="price") {
        commodityData = commodityData.sort((a, b) => {
            return parseInt(a.recommendPrice) - parseInt(b.recommendPrice)
        })
    }else if(type=="comment"){
        commodityData = commodityData.sort((a, b) => {
            return parseInt(b.graphicComment) - parseInt(a.graphicComment)
        })
    }else if(type=="origin"){
        commodityData = commodityData.sort((a, b) => {
            return a.graphicOrigin.localeCompare(b.graphicOrigin,"zh-Hans-CN");
        });
    }
    return  commodityData;
};
