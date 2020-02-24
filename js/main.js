$(function(){
    
    /*
    ** weather app function wetherApp_1 v1.1
    ** retrun temp, city name, wind-speed, min-tem, max-temp, lat and long as an array
    ** info array ['city_name','temp','wind_speed','visibility','min_temp','max_temp','lat','long']
    */
    // appid key
    const appid = 'bfe5b46e009f513f4f2193692ea22165';
    let wetherApp_1 = function(city){
        // select unit type
        const units = 'metric';
        let url_add = '';
        if(units == 'metric'){
            // using Celsius degree
            url_add = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}&units=${units}`;
        }else{
            // using Fahrenheit degree
            url_add = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}&units=${units}`;
        }
        $.getJSON(url_add,function(data){
            
            $('.city-name').text(city);
            $('.degree').html(data.main.temp);
            $('.speed').html(data.wind.speed);
        });
    }
    wetherApp_1('zagazig');
    // End of function
    
    // add selection function
    $('.menu').on('click',function(){
        $('.search').toggleClass('active');
    })
    $('#btn-search').on('click',function(e){
        e.preventDefault();
        let city = $('#city').val();
        wetherApp_1(city);
        $('.search').removeClass('active');
    });
    
        



})