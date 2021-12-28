$(document).ready(function(){
    let RegisterUser = document.getElementById('register-user');
    let RegisterUserChart = new Chart(RegisterUser , {
        type : 'line',
        data : {
            labels : ['','','','','',''],
            datasets : [{
                data : [15333,21555,18496,24200,10600,15600],
                backgroundColor : 'transparent',
                borderColor : '#fff',
                borderWidth : 2 ,
                pointBackgroundColor : '#fff'
            }]
        },
        options : {
            layout : {
                padding : {
                    left : 5,
                    right : 5
                }
            },
            scales : {
                yAxes : [{
                    display : false
                }],
                xAxes : [{
                    display : false
                }],
            },
            legend : {
                display : false
            }
        }
    })

    let Comment = document.getElementById('comment');
    let CommentChart = new Chart(Comment , {
        type : 'bar',
        data : {
            labels : ['','','','','',''],
            datasets : [{
                data : [15333,21555,18496,24200,10600,15600],
                backgroundColor : '#fff',
                borderColor : '#fff',
                borderWidth : 2 ,
                pointBackgroundColor : '#fff'
            }]
        },
        options : {
            layout : {
                padding : {
                    left : 5,
                    right : 5
                }
            },
            scales : {
                yAxes : [{
                    display : false
                }],
                xAxes : [{
                    display : false
                }],
            },
            legend : {
                display : false
            }
        }
    })

    let ShopUser = document.getElementById('shop-user');
    let ShopUserChart = new Chart(ShopUser , {
        type : 'line',
        data : {
            labels : ['','','','','',''],
            datasets : [{
                data : [15333,21555,18496,24200,10600,15600],
                backgroundColor : 'transparent',
                borderColor : '#fff',
                borderWidth : 2 ,
                pointBackgroundColor : '#fff'
            }]
        },
        options : {
            layout : {
                padding : {
                    left : 5,
                    right : 5
                }
            },
            scales : {
                yAxes : [{
                    display : false
                }],
                xAxes : [{
                    display : false
                }],
            },
            legend : {
                display : false
            }
        }
    })

    let ApproveComment = document.getElementById('approve-comment');
    let ApproveCommentChart = new Chart(ApproveComment , {
        type : 'bar',
        data : {
            labels : ['','','','','',''],
            datasets : [{
                data : [15333,21555,18496,24200,10600,15600],
                backgroundColor : '#fff',
                borderColor : '#fff',
                borderWidth : 2 ,
                pointBackgroundColor : '#fff'
            }]
        },
        options : {
            layout : {
                padding : {
                    left : 5,
                    right : 5
                }
            },
            scales : {
                yAxes : [{
                    display : false
                }],
                xAxes : [{
                    display : false
                }],
            },
            legend : {
                display : false
            }
        }
    })

    let Online = document.getElementById('online');
    let OnlineChart = new Chart(Online , {
        type : 'line',
        data : {
            labels : ['یکشنبه','دوشنبه','سه شنبه','چهارشنبه','پنجشنبه','جمعه'],
            datasets : [{
                data : [15333,21555,18496,24200,10600,15600],
                backgroundColor : 'rgba(0,0,0,.4)',
                borderColor : '#555',
                borderWidth : 3 ,
                pointBackgroundColor : '#333'
            }]
        },
        options : {
            legend : {
                display : false
            }
        }
    })


    resizeTemplate()
    $(window).resize(resizeTemplate)

    function resizeTemplate() {
        if($(window).width() <= 768) {
            $('#sidebar').collapse('hide');
        } else {
            $('#sidebar').collapse('show');
        }
    }


    $('#sidebar').on('hide.bs.collapse' , function(e) {
        if(e.target == this) {
            $('#main').removeClass('col-md-10');
        }
    })
    $('#sidebar').on('show.bs.collapse' , function(e) {
        if(e.target == this) {
            $('#main').addClass('col-md-10');
        }
    })
});
