var a=100
var b=12.4
var c = 234

function addit(){
	x=document.getElementById('entry1').value
	y=document.getElementById('entry2').value
	
	console.log(x*y)
	//parseInt()
	
}

dsp = document.getElementById('dsp')
text="hello world its a good day !"
txt =/GOOD/ig
y = text.search('GOOD')
z = text.indexOf('good day')
r2 = txt.test(text)
//dsp.innerHTML =r2
/*
if (y!=-1){
dsp.innerHTML = "the word 'good' is in the string" 
}
else{
dsp.innerHTML = "the good is in NOT the string" 
	
}
*/

item1={'name':'cofee',
'price':680,
'quantity':1}

item2={'name':'bread',
'price':800,
'quantity':1}

item3={'name':'butter',
'price':600,
'quantity':1,
'display':function(){
	return self.name+""+self.price}
}
dsp.innerHTML =showitems(item1)+showitems(item2)
//console.log(item)
function showitems(item){
	dsp = `<br>${item.name}
<br>${item.price}<br>${item.quantity}`
return dsp
}

function Inc(item){
  x=item['quantity']+1
  item['quantity']=x
}
//Inc(item1)
/*
itx={'name':'butter',
'price':600,
'quantity':1,
'display':function(){
	return this.name+" "+this.price}
}
console.log('details',itx.display())
data={
	'it1':item1,
	'it2':item2
	
}

for(var prop in data){
	
	console.log(prop,data[prop].name)
	
}
*/


dnumbers =[100,200,450]

function dtest(x){return x<500}
gh = dnumbers.every(dtest)
console.log(gh)

let yeema=(x)=>x*2
console.log(yeema(40)) 