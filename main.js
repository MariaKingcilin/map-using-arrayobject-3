const kings=[
{
	f_name:"Mariya",
	l_name:"Mariathaipuram"
},
{
	f_name:"Anto",
	l_name:"Thinaiyoorani"
},
{
	f_name:"Sathish",
	l_name:"S.V.Karai"
}
];
var a=[];
kings.map(function(value)
{
	a.push(value.f_name+" "+"lives in"+" "+value.l_name);
});
console.log(a);