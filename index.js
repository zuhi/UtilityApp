let readLineSync = require('readline-sync');
const crypto = require('crypto');


const print = (printValue) => console.log(printValue);

switch(readLineSync.question("Choose which utility you want to use:\n1) URL Encoder\n2) URL Decoder\n3) Base64 Encoding\n4) Base64 Decoding\n5) String Hashing\n6) Epoch Convertor\n7) Binary/Decimal/Hex/Octal Convertors\n8) RGB Convertor\n9) Unit Convertor\n")){
  case "1": const URL = readLineSync.question("Enter the url to be encoded: ");
            print(encodeURIComponent(URL));
            break;
  case "2": const decodeURL = readLineSync.question("Enter the encoded URL to be decoded: ");
            print(decodeURIComponent(decodeURL));
            break;
  case "3": const string = readLineSync.question("Enter the string to be encoded to Base64 Encoding");
            print(Buffer.from(string).toString('base64'));
            break;
  case "4": const stringencode = readLineSync.question("Enter Base64 encoded string to be decoded :");
            print(Buffer.from(stringencode, 'base64').toString('ascii'));
            break;
  case "5": const stringchoice = readLineSync.question("Enter the string to be hased :");
            let algo = 'sha1';
            switch(parseInt(readLineSync.question("Choose which Hashing algorithm to use:\n1)md5\n2)sha-1\n3)sha-256\n4)sha-512\n"))){
                case 1: algo = 'md5';
                          print(crypto.createHash(algo).update(stringchoice).digest('hex'));
                          break;
                case 2: algo = 'sha1';
                          print(crypto.createHash(algo).update(stringchoice).digest('hex'));
                          break;
                case 3: algo = 'sha-256';
                          print(crypto.createHash(algo).update(stringchoice).digest('hex'));
                          break;
                case 4: algo = 'sha-512';
                          print(crypto.createHash(algo).update(stringchoice).digest('hex'));
                          break;
                default:  print("Invalid choice");   
                }
            break;
  case "6": 
            let dataObj = {year: 0, month: 0, date: 0, hours: 0, minutes: 0, seconds: 0};
            switch(readLineSync.question("Choose which conversion to use:\na) To Human-date\nb) To Epoch\n")){
              case "a": let utcSeconds = readLineSync.question("Enter the time in epoch, to convert to Human date: ");
                        let d = new Date(parseInt(utcSeconds));
                        //d.setUTCSeconds();
                        dataObj.year= d.getFullYear(); dataObj.month= d.getMonth()+1; dataObj.date = d.getDate(); dataObj.hours = d.getHours(); dataObj.minutes=d.getMinutes(); dataObj.seconds= d.getSeconds();
                      
                        print(dataObj);
                        break;
              case "b": dataObj.year = parseInt(readLineSync.question("Enter the year: "));
                        dataObj.month = parseInt(readLineSync.question("Enter the month: "));
                        dataObj.date = parseInt(readLineSync.question("Enter the date: "));
                        dataObj.hours = parseInt(readLineSync.question("Enter hours: "));
                        dataObj.minutes = parseInt(readLineSync.question("Enter minutes: "));
                        dataObj.seconds = parseInt(readLineSync.question("Enter seconds: "));

                        let convertDate = new Date(dataObj.year, dataObj.month, dataObj.date, dataObj.hours, dataObj.minutes, dataObj.seconds );
                        print(Date.parse(convertDate));
                        break;
                
              default: print("Invalid choice!");

            }
            break;
  case "7":  switch(readLineSync.question("Choose which conversion:\na)Binary To Decimal\nb)Binary to Hex\nc)Binary To Octal\nd)Decimal To Binary\ne)Decimal To Hex\nf)Decimal To Octal\ng)Hex to Decimal\nh)Hex To Binary\ni)Hex to Octal\nj)Octal To Binary\nk)Octal To Decimal\nl)Octal to Hex\n")){


              case "a": print(parseInt(readLineSync.question("Enter binary number: "),2));
                        break;
          
              case "b": print(parseInt(readLineSync.question("Enter binary number: "),2).toString(16));
                        break;

              case "c": print(parseInt(readLineSync.question("Enter binary number: "),2).toString(8));
                        break;

              case "d": print(parseInt(readLineSync.question("Enter decimal number: "),10).toString(2));
                        break;
          
              case "e": print(parseInt(readLineSync.question("Enter decimal number: "),10).toString(16));
                        break;

              case "f": print(parseInt(readLineSync.question("Enter decimal number: "),10).toString(8));
                        break;
      
              case "g": print(parseInt(readLineSync.question("Enter Hexadecimal number: "),16).toString(10));
                        break;
          
              case "h": print(parseInt(readLineSync.question("Enter Hexadecimal number: "),16).toString(2));
                        break;

              case "i": print(parseInt(readLineSync.question("Enter Hexadecimal number: "),16).toString(2));
                        break;

              case "j": print(praseInt(readLineSync.question("Enter Octadecimal number: "),8).toString(2));
                        break;

          
              case "k": print(parseInt(readLineSync.question("Enter Octadecimal number: "),8).toString(2));
                        break;

              case "l":  print(parseInt(readLineSync.question("Enter Octadecimal number: "),8).toString(16));
                        break;

              default: print("Invalid choice!");

             }
             break;
  case "8": let RGBcomponent = { red:"",blue:"",green:""};
            switch(readLineSync.question("Enter which RGB Convertor to use:\na)RGB to HEX\nb)HEX to RGB\n")){
            case "a":  RGBcomponent.red = readLineSync.question("Enter which R: ");
                       RGBcomponent.blue = readLineSync.question("Enter which B: "); 
                       RGBcomponent.green = readLineSync.question("Enter which G: ");
                       const convertColor = (color) =>{
                       let hexadecimal=  parseInt(color,10).toString(16);
                       if(hexadecimal.length==1){
                          return "0"+hexadecimal;
                        }
                        return hexadecimal;
                       }
                      print("#"+convertColor(RGBcomponent.red)+convertColor(RGBcomponent.blue)+convertColor(RGBcomponent.green));
        
                      break;
        
        
            case "b": let rgbColor = readLineSync.question("Enter RGB Value of the color: ");
                      RGBcomponent.red = parseInt(rgbColor[1]+rgbColor[2],16);
                      RGBcomponent.blue= parseInt(rgbColor[3]+rgbColor[4],16);
                      RGBcomponent.green = parseInt(rgbColor[5]+rgbColor[6],16);
                      print(RGBcomponent);
      
                      break;
            default: print("Invalid Choice!");
      
             }
             break;
  case "9": switch(readLineSync.question("Enter which Unit Convertor to use:\na)Meter to Centimeter\nb)Meter to Kilometer\nc)Meter to Millimeter\nd)Kilometer to Meter\ne)Kilometer to Centimeter\nf)Kiliometer to Millimeter\n")){
            case "a": let meterToCm = parseInt(readLineSync.question("Enter value in Meter: "))*100;
                      print(`Value in cm: ${meterToCm}`);
                      break;
        
            case "b": let meterToKM = parseInt(readLineSync.question("Enter value in Meter: "))/1000;
                      print(`Value in Kilometer: ${meterToKM}`);
                      break;
        
            case "c": let meterToMM = parseInt(readLineSync.question("Enter value in Meter: "))*1000;
                      print(`Value in Millimeter: ${meterToMM}`);
                      break;
              
            case "d": let KMtoM = parseInt(readLineSync.question("Enter value in KiloMeter: "))*1000;
                      print(`Value in Meter: ${KMtoM}`);
                      break;
        
            case "e": let KMtoCM= parseInt(readLineSync.question("Enter value in KiloMeter: "))*10000;
                      print(`Value in Centimeter: ${KMtoCM}`);
                      break;
        
            case "f": let KMtomm = parseInt(readLineSync.question("Enter value in KiloMeter: "))*1000000;
                      print(`Value in Millimeter: ${KMtomm}`);
                      break;
      
            default: print("Invalid choice!");

          }
          break;
  default: print("Invalid choice entered!");
    
          
    
}