//৩৩ তুমি এতদিন যা যা জিনিস শিখছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা for লুপ দিয়ে সেই array এর সব উপাদান কে আউটপুট হিসেবে দেখাও। 

var arr = ['variable', 'number', 'string', 'boolean', 'if', 'if-else', 'condition', 'loop', 'while-loop', 'for-loop', 'break', 'continue'];
console.log(arr.length);   // arr length hocce 12
for(i = 0; i <= arr.length-1; i++){ // but jehetu i er nam 0 theke suru so 0-11 total 12 hobe tai arr er last 12 take 11 korte -1 use kora hoyece
    var new_arr = arr[i];
    console.log(new_arr);
}