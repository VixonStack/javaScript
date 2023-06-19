/*
<body>
<div>
<button>click</button>
</div>
</body>

agar hum normally click event lagayenge button pe to vo pehle button pe lagega lekin button ek div me hai aur vo div ek body me hai to vo event button ke sath sath unpe bhi apply hoga kyuki click button pe ho rha hai lekin button to div me hai aur vo div body me
isko hi bubbling bolte hai.

if we want ki nhi pehle clcik body pe jaye than div me than button pe aur order according to uss... 
to humko add eventlistner me event , function ke baad true bhi mention karna padega by default vo false hota hai jo ki bubbling hai true likhne se sequence change ho jayega
*/