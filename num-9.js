//৩৬. তোমার যত বই আছে সেগুলার দাম নিয়ে একটা array লিখে ফেলো। যে বই গুলোর দাম ২০০ টাকার উপরে সেগুলাকে স্কিপ করবে। অর্থাৎ সেগুলাকে আউটপুট হিসেবে দেখাবে না। বাকিদের কে আউটপুট হিসেবে দেখাবে। দেখো করতে পারো কিনা। 


var arr = [120, 160, 205, 300, 70, 90, 110];

for(i=0 ; i <= arr.length-1 ; i++){
    if(200 < arr[i]){
        continue;
    }
    console.log(arr[i]);
}