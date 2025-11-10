let data1 = document.getElementById('Input');
let data2 = document.getElementById('Button');
let data3 = document.getElementById('result');

let sensor_size = 0.01733;
let no_of_pixels = 5280;
let length_of_sensor = 0.012;

function f1(){
    const selectedValue = data1.value;
    const size_of_pixels = (sensor_size/no_of_pixels);
    let height_of_flight = (selectedValue/size_of_pixels)*length_of_sensor;

    data3.textContent = `Mavic3E は　地上画像寸法${data1.value}m/pixelのために地上から　${height_of_flight.toFixed(0)}ｍ　まで飛ばせます。`;
}