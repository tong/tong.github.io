(function (console) { "use strict";
function $extend(from, fields) {
	function Inherit() {} Inherit.prototype = from; var proto = new Inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var HxOverrides = function() { };
HxOverrides.cca = function(s,index) {
	var x = s.charCodeAt(index);
	if(x != x) return undefined;
	return x;
};
var Std = function() { };
Std.parseInt = function(x) {
	var v = parseInt(x,10);
	if(v == 0 && (HxOverrides.cca(x,1) == 120 || HxOverrides.cca(x,1) == 88)) v = parseInt(x);
	if(isNaN(v)) return null;
	return v;
};
var fadr_App = function(settings) {
	this.view = new fadr_View([{ name : "erosionlight", colors : ["#e0daac","#856a2a","#ffdcc4","#93a1a1","#8c644c","#646a6d","#746c48","#50443b","#817267","#9f7155","#8f8558","#bfba92","#777e82","#6d6871","#756f7b","#766782","#897796","#3b484a","#444d4e","#4b5c5e","#556d70","#504339","#9a875f"]},{ name : "candy", colors : ["#f3e7c6","#0d0b0d","#1e2f41","#906b61","#84252c","#c94428","#ae7d6e","#c0bd86","#d6c08f","#ad683b","#143a58","#e09657","#62162e","#7c1c3b","#8b9c4d","#d9945f","#b99f8d"]},{ name : "jellybean", colors : ["#151515","#888888","#1c1c1c","#404040","#b85335","#cf6a4c","#799d6a","#99ad6a","#ffb964","#fad07a","#667899","#8197bf","#8787af","#c6b6ee","#668799","#8fbfdc","#e8e8d3"]},{ name : "plastique", colors : ["#1c1b18","#b3ae98","#36342e","#8c4f30","#a65d38","#8c815e","#a6986f","#8c6f46","#a68353","#4f4235","#695746","#8c3047","#a63854","#8c6d5e","#a6816f","#999582"]},{ name : "hal1", colors : ["#738a8a","#181512","#ca5e64","#3b444f","#4a585a","#cd546c","#ef545f","#a5af86","#bdc79e","#cd7860","#e88773","#7a9388","#94b1a3","#75434c","#bb6c73","#767d75","#9da69e","#c2c2a8","#dbdac1"]},{ name : "blackburn", colors : ["#020202","#f2f1f0","#f67730","#222222","#666666","#d23d3d","#e84f4f","#b7ce42","#bde077","#f6784f","#f07746","#7dc1cf","#66aabb","#4e9fb1","#aaccbb","#b7416e","#e16a98","#6d878d","#42717b"]},{ name : "erosionbrighter", colors : ["#181512","#d9bba7","#4d443e","#9c897c","#a66b49","#b8764f","#8c8149","#9e8f51","#a89f66","#b5aa6e","#6f7e87","#7b8b94","#7a6460","#655b5b","#547478","#5b848a","#69523f","#b3965b"]},{ name : "cathulu", colors : ["#a6a6a6","#121212","#6e484e","#333333","#474747","#63484e","#486350","#6f6b56","#56676f","#63485b","#636363"]},{ name : "clean", colors : ["#262729","#f8f8f2","#b5d2dd","#5e7175","#a6e22e","#626262","#f92671","#ff669d","#beed5f","#fd971f","#e6db74","#1692d0","#66d9ef","#9e6ffe","#df92f6","#a3babf"]},{ name : "clouds", colors : ["#0e0e0e","#fefefe","#454545","#666666","#cc4747","#bf5858","#a0cf5d","#b8d68c","#ff9b52","#ffb680","#5fa69b","#99c7bf","#a966cc","#bd9fcc","#6cab79","#95ba9c","#d3d3d3"]},{ name : "colors", colors : ["#d7d0c7","#151515","#af875f","#404040","#e84f4f","#d23d3d","#b8d68c","#a0cf5d","#e1aa5d","#f39d21","#7dc1cf","#4e9fb1","#9b64fb","#8542ff","#6d878d","#42717b","#dddddd","#ff8939"]},{ name : "butter", colors : ["#917154","#e3ab8d","#f0e5df","#cd546c","#eddcd3","#181512","#252525","#454545","#ef545f","#a5af86","#bdc79e","#cd7860","#e88773","#7a9388","#94b1a3","#989584","#767d75","#9da69e","#c2c2a8","#dbdac1"]},{ name : "jmrl1", colors : ["#ddccbb","#101010","#25221c","#171512","#d9751e","#b5651f","#c23e4d","#a8313e","#c99222","#ad8128","#534fd1","#3834c5","#8c5922","#854e13","#458ae6","#2e6fc7","#beb888","#aba576"]},{ name : "charlie_brown", colors : ["#cfeafb","#def6fe","#ef3828","#f16328","#48a052","#749077","#c1a564","#d6b075","#448fbf","#02a0d6","#877eaa","#b0bce6","#d394b9","#6ab7e2","#a7d9f1","#110102","#26312a"]},{ name : "cryptred", colors : ["#a80036","#666666","#d3d3d3","#111111","#181818","#d7d7d7","#740629","#d4d4d4"]},{ name : "danuce", colors : ["#0d0b0d","#f3e7c6","#1e2f41","#906b61","#753b39","#7f403e","#52633e","#5f7348","#965142","#a6594a","#486569","#306769","#503b66","#6d4f8a","#29635b","#2f7066","#b99f8d","#f3dcc6"]},{ name : "beard", colors : ["#191716","#daba8b","#0f0e0d","#383332","#845336","#8c4f4a","#57553c","#898471","#a17e3e","#c8b491","#43454f","#65788f","#604848","#755e4a","#5c6652","#718062","#a18b62","#bc9d66"]},{ name : "bloom", colors : ["#03000d","#efecdd","#5d4f2d","#180f00","#c45553","#7f0009","#97a007","#6d9600","#8c754c","#925238","#365e5b","#135972","#924955","#6a0007","#098e80","#dacebf","#c7b59f"]},{ name : "erosiondark", colors : ["#bea492","#181512","#252525","#454545","#8c5b3e","#9f6744","#a5af86","#bdc79e","#965142","#a6594a","#7a9388","#94b1a3","#917154","#989584","#767d75","#9da69e","#b99f8d","#dcc58f"]},{ name : "cryptmatrix", colors : ["#afe690","#666666","#d3d3d3","#111111","#181818","#d7d7d7","#d4d4d4"]},{ name : "wooly", colors : ["#181512","#d6c3b6","#ffdcc4","#93a1a1","#8c644c","#646a6d","#746c48","#332d29","#817267","#953b00","#dc5e0a","#705a29","#88832f","#fc9713","#f6ae62","#777e82","#6d6871","#756f7b","#766782","#897796","#3b484a","#444d4e","#4b5c5e","#556d70","#504339","#9a875f"]},{ name : "solarized_light", colors : ["#073642","#586e75","#657b83","#839496","#93a1a1","#eee8d5","#fdf6e3","#b58900","#cb4b16","#dc322f","#d33682","#6c71c4","#268bd2","#2aa198","#859900"]},{ name : "crypt", colors : ["#aadb0f","#666666","#aad80f","#d3d3d3","#111111","#181818","#d7d7d7","#91ba0d","#d4d4d4"]},{ name : "gutter", colors : ["#1a1b1c","#808080","#484848","#666767","#a1756c","#d1aca3","#719171","#aad1ac","#9c9869","#c3c49f","#7186a6","#a6c0de","#876794","#bea2cf","#628c85","#a1d4c2","#8f8f8f","#cacbcb"]},{ name : "jmbi", colors : ["#1e1e1e","#5a7260","#8da691","#8f423c","#eeaa88","#bbbb88","#ccc68d","#f9d25b","#eedd99","#e0ba69","#c9b957","#709289","#ffcbab","#d13516","#c25431","#efe2e0","#f9f1ed"]},{ name : "neeee", colors : ["#cbc6cc","#19171a","#242224","#4c4b4d","#b8b2b9","#ece8ed","#995876","#f895c4","#748c71","#b3d6ae","#9c8f6a","#f4e1ab","#7086a8","#bcd8ff","#97729c","#dfbaf5","#698c8c","#aae3db"]},{ name : "bw_w2", colors : ["#d8d8d8","#808080","#b3b3b3","#bfbfbf","#999999","#a6a6a6","#8c8c8c","#666666","#737373","#4d4d4d","#595959","#333333","#404040","#191919","#282828"]},{ name : "papey", colors : ["#e5e5e5","#1d1d1d","#121212","#5f5f5f","#a35b66","#ab6b74","#99ab6f","#acb792","#ca9733","#ccaa69","#495d6e","#687987","#825969","#977381","#839191","#98a4a4","#e0e0e0"]},{ name : "poppy", colors : ["#f0f0f0","#181512","#373737","#474747","#cc4141","#ba2929","#43803d","#2f632a","#7882bf","#596196","#dbab3b","#c79520","#bf849c","#b06a86","#6aa9b0","#4d8b91","#e39036","#c97820"]},{ name : "form", colors : ["#3a3a3a","#8c5b3e","#80764d","#917154","#596875","#6e464b","#495e61","#bcbcaf","#505050","#9f6744","#80785a","#917963","#656d75","#6e5155","#525f61","#c1c4bc"]},{ name : "neue", colors : ["#a0a0a0","#333333","#1b1d1e","#ccccc6","#bebeb4","#3d3e3d","#5a5b5c","#755a5b","#a37679","#68755a","#87a376","#756e5a","#a39b76","#5b6976","#758ba3","#755b76","#9f76a3","#465457","#899ca1","#f8f8f2"]},{ name : "ancient", colors : ["#181512","#bea492","#93a1a1","#332d29","#817267","#8c644c","#9f7155","#c4be90","#bec17e","#bfba92","#fafac0","#293033","#303b40","#646a6d","#626e74","#6d6871","#756f7b","#3b484a","#444d4e","#504339","#9a875f"]},{ name : "thawedit", colors : ["#170f0d","#746c48","#bea492","#af652f","#c8b984","#392925","#544b2e","#98724c","#a6a53a","#908f32","#c3c13d","#bda754","#aa964c","#c8b55b","#7b854e","#70a16c","#929e5d","#6b5644","#5c5142","#778725","#e4dc8c","#504339","#9a875f"]},{ name : "erosion", colors : ["#181512","#bea492","#93a1a1","#332d29","#817267","#8c644c","#9f7155","#c4be90","#bec17e","#bfba92","#fafac0","#293033","#303b40","#646a6d","#626e74","#6d6871","#756f7b","#3b484a","#444d4e","#504339","#9a875f"]},{ name : "clear", colors : ["#101010","#404040","#e84f4f","#d23d3d","#b8d68c","#a0cf5d","#e1aa5d","#f39d21","#7dc1cf","#4e9fb1","#9b64fb","#8542ff","#6d878d","#42717b","#dddddd"]},{ name : "erosionbright", colors : ["#181512","#bea492","#9a875f","#8c644c","#646a6d","#332d29","#4d443e","#bf8868","#746c48","#a69b67","#908a66","#c2ba89","#949ca1","#656565","#706d70","#463c3b","#605655","#948583","#3b484a","#444d4e","#4b5c5e","#748e91","#504339"]},{ name : "bw_w", colors : ["#4e4fff","#9a9a9a","#121212","#1c1c1c","#a5a5a5","#a4a4a4","#777777","#646464","#999999","#7c7c7c","#4c4c4c","#515151","#2b2b2b","#322929","#101010"]},{ name : "cryptedit", colors : ["#aadb0f","#666666","#aad80f","#d3d3d3","#111111","#181818","#d7d7d7","#91ba0d","#d4d4d4"]},{ name : "nebula", colors : ["#080808","#aaaaaa","#343639","#424242","#ce5666","#d75f5f","#80a673","#97d599","#ffaf5f","#e0bc93","#5a667f","#778baf","#94738c","#d8adce","#5f8787","#69b2b2","#909090","#d7d7d7"]},{ name : "dawn", colors : ["#9b9081","#181b20","#353535","#744b40","#6d6137","#765636","#61564b","#6b4a49","#435861","#b3b3b3","#5f5f5f","#785850","#6f6749","#776049","#696057","#6f5a59","#525f66","#cdcdcd"]},{ name : "sawyr", colors : ["#1c1709","#c2b9a1","#4f4939","#8e4317","#f07935","#787200","#d9d138","#945c00","#ffab26","#315094","#8aa9ed","#5c2e40","#ff8cb8","#43bfe0","#f2e8c9"]},{ name : "ok100", colors : ["#140c0b","#877a70","#58756c","#cdcdcd","#6b753d","#403f3e","#666362","#91444d","#c78186","#6b853d","#abbd80","#916949","#cca88b","#557282","#8eabbd","#78516d","#a8879f","#8ca8a2","#94928f"]},{ name : "blue", colors : ["#b2b2b2","#927d9e","#6e98b8","#7791e0","#343639","#404040","#2f468e","#424242","#828a8c","#6b8ba3","#8ebdde","#1c4582","#5365a6","#74637d","#556c85","#bdbdbd"]},{ name : "space", colors : ["#d0d0d0","#c37561","#a0a57e","#202020","#ddccbb","#222222","#666666","#cc4747","#bf5858","#a0cf5d","#b8d68c","#e0a524","#edb85c","#4194d9","#60aae6","#cc2f6e","#db588c","#6d878d","#42717b","#dedede","#f2f2f2"]},{ name : "jmrl2", colors : ["#0d0b0d","#c4c3af","#213559","#182a4a","#802d14","#732811","#174a21","#113d19","#94632b","#855621","#851416","#750d0f","#59514c","#453d38","#856d3a","#7a6330","#8b8c72","#797a62"]},{ name : "erosionbrightest", colors : ["#181512","#d9bba7","#4d443e","#9c897c","#bf8868","#d1946f","#a69b67","#b8aa71","#c2ba89","#cfc592","#949ca1","#a1a9ad","#948583","#808080","#748e91","#7c9ea3","#826d5c","#ccb27d"]},{ name : "smooth", colors : ["#181512","#f7f7f7","#348c51","#f0f0f0","#f0f7f0","#f7f0f0","#272727","#3a2b5a","#503151","#742d3f","#a7552e","#d8be58","#cda8b0","#474747","#453457","#6f3e5e","#923a46","#c1653e","#fbcf76","#40aa5a","#dec1b9"]},{ name : "bw_b", colors : ["#090909","#111111","#181818","#222222","#272727","#333333","#393939","#444444","#484848","#555555","#595959","#666666","#707070","#777777","#818181"]},{ name : "barrage", colors : ["#1b1d20","#a5a5a5","#323232","#823a45","#878c49","#ba954a","#335f79","#7f3a60","#1e4e51","#b3b3b3","#424242","#82444c","#a5ac69","#e3c55b","#548098","#7f4766","#2d5d5f","#b0b0b0"]},{ name : "venam2", colors : ["#191919","#afaf87","#46423b","#a04363","#ae837a","#9b9329","#b4aa30","#bf7a29","#c7a551","#6a8c8c","#74999e","#856774","#9c818e","#757978","#9fa590","#bcbcaf","#c1c4bc"]},{ name : "fallac", colors : ["#30303a","#d6d6d6","#777777","#aaaaaa","#6fa5df","#4a4a4a","#c29198","#a0616a","#df6f6f","#eba8a8","#abd8a5","#80a27b","#6fdfa4","#a8ebc8","#acacac","#858585","#dfdc6f","#ebeaa8","#a8c9eb","#846fdf","#b5a8eb","#6fcadf","#a6e6eb","#c3c3c3"]},{ name : "hal3", colors : ["#101010","#d2c5bc","#202020","#606060","#b91e2e","#d14548","#81957c","#a7b79a","#f9bb80","#fae3a0","#356579","#7491a1","#2d2031","#87314e","#0b3452","#0f829d","#909090","#fff0f0"]},{ name : "fresh", colors : ["#ddccbb","#30251d","#151515","#393939","#af875f","#bf1e2d","#e7212a","#9dba3a","#a9c938","#f5b915","#f7d325","#1ca1db","#652f90","#894e9f","#ea7d24","#f79321","#e7e8e9","#f3f3f4"]},{ name : "erosion2", colors : ["#93a1a1","#332d29","#817267","#8c644c","#9f7155","#c4be90","#bec17e","#bfba92","#fafac0","#293033","#303b40","#646a6d","#626e74","#6d6871","#756f7b","#3b484a","#444d4e","#504339","#9a875f"]},{ name : "julie", colors : ["#c6a57b","#151515","#101010","#404040","#953331","#8d4a48","#546a29","#7e9960","#909737","#9ca554","#385e6b","#5c737c","#7f355e","#95618b","#34676f","#5d858a","#dddddd"]},{ name : "gohucolor", colors : ["#0d131a","#8a9499","#44484c","#802635","#b3354c","#608040","#4ba65a","#877c43","#bf9f5f","#1c678c","#3995bf","#684d80","#a64286","#337373","#6aaab3","#738080","#b3b3b3"]},{ name : "thaw", colors : ["#170f0d","#746c48","#bea492","#af652f","#c8b984","#392925","#544b2e","#98724c","#908f32","#c3c13d","#aa964c","#c8b55b","#7b854e","#70a16c","#6b5644","#5c5142","#778725","#e4dc8c"]},{ name : "plain", colors : ["#1c1b18","#ccc7ae","#35342d","#736d61","#8c8577","#898c77","#a2a68d","#a6a68d","#bfbfa3","#4f4d43","#a69a8d","#bfb1a2","#737061","#8c8977","#b3ae98"]},{ name : "cryptetsy", colors : ["#e2791b","#666666","#d3d3d3","#111111","#181818","#d7d7d7","#bf3c0a","#d4d4d4"]},{ name : "notch", colors : ["#a0a0a0","#222222","#383838","#474747","#a95551","#a97775","#666666","#8c8c8c","#a98051","#a99175","#657d3e","#98bd5e","#767676","#a3a3a3","#c9c9c9","#dcdcdc","#d0b8a3","#d8c8bb","#acacab","#1a1a1a","#050505","#e9897c","#b6377d","#ecebbe","#a9cdeb","#75507b","#c9caec","#f2f2f2","#141414","#f99286","#c3f786","#fcfbcc","#b6defb","#ad7fa8","#d7d9fc","#e2e2e2","#6f716d","#151310","#322b21","#3a3023","#51473b","#514b44","#4f483e","#63533c","#494339","#3d3933","#474438","#5f5b4c","#504836","#504a3d","#26231e","#262421","#36312d","#342f2b","#272521","#575655","#928d8c","#706f69","#a6a399","#737373","#4a4949","#6e6d69","#4a4a4a","#929292","#565656","#949494","#3d3d3d","#545454","#767776","#555753","#ff6565","#ff8d8d","#93d44f","#c8e7a8","#eab93d","#ffc123","#204a87","#3465a4","#ce5c00","#f57900","#89b6e2","#46a4ff","#cccccc","#ddeedd","#1c1c1c","#4d4d4d","#d81860","#f00060","#b7ce42","#bde077","#fea63c","#ffe863","#66aabb","#aaccbb","#b7416e","#bb4466","#5e7175","#a3babf","#6c887a","#382d22","#c37b5f","#9cb955","#bba85b","#748e9b","#925e5a","#5f9566","#bdbc8f","#4a3f2e","#e19688","#c0d584","#dbc585","#a3bac5","#ba8092","#8cb9a2","#dbd5ba","#a0c0e0","#6080a0","#6080c0","#4060c0","#4060a0","#e0f0f0","#2060c0","#262729","#554444","#ea6868","#ff7272","#abcb8d","#afd78a","#e8ae5b","#ffa75d","#71c5f4","#67cde9","#e2baf1","#ecaee9","#21f1ea","#36fffc","#f1f1f1","#3d352a","#cd5c5c","#86af80","#6495ed","#deb887","#b0c4de","#bbaa99","#cc5533","#88aa22","#87ceeb","#996600","#ddccbb","#1b1d1e","#f92672","#ff669d","#a6e22e","#beed5f","#fd971f","#e6db74","#66d9ef","#9e6ffe","#ccccc6","#f8f8f2","#242424","#cdb5cd","#bf7979","#f4a45f","#97b26b","#c5f779","#cdcda1","#ffffaf","#86a2be","#98afd9","#d9b798","#d7d998","#a1b5cd","#dedede","#3f3f3f","#dcdccc","#1e2320","#705050","#60b48a","#dfaf8f","#506070","#dc8cc3","#8cd0d3","#709080","#dca3a3","#c3bf9f","#f0dfaf","#94bff3","#ec93d3","#93e0e3"]},{ name : "blackgum", colors : ["#ecedee","#111111","#2e1f1f","#422d2d","#aa0e50","#be0e50","#1dcc9f","#1fd9a9","#27c282","#2cdb93","#7182a8","#8194bf","#a673a6","#7f5aa1","#6da3a1","#669997","#b7bbbd","#d9d9d9"]},{ name : "beastie", colors : ["#c3c2c5","#1c1c1c","#505050","#cd5c5c","#e5505f","#8eae71","#95c749","#d2b48c","#ffa75d","#6495ed","#7e62b3","#a488d9","#5f7b8a","#665c64","#cacaca"]},{ name : "ratpoison", colors : ["#232323","#e8e9ca","#8b3e2f","#526f33","#8b814c","#4a708b","#7a378b","#528b8b","#999999","#4c4c4c","#d75f00","#8ea433","#eee685","#9ac0cd","#9f79ee","#79cdcd"]},{ name : "gekko", colors : ["#bea492","#181512","#1d2930","#1d1d25","#1f1d24","#233439","#283e41","#314b49","#3d645c","#516d5b","#728b6e","#7ba081","#9ba177","#b1b285","#c8cc97","#cabb86","#cdb77c","#e6cf8e"]},{ name : "erosioncontrast", colors : ["#111111","#d8d8d8","#8c5b3e","#80764d","#917154","#596875","#6e464b","#495e61","#bcbcaf","#505050","#9f6744","#80785a","#917963","#656d75","#6e5155","#525f61","#c1c4bc","#c6c6c6"]},{ name : "xmas", colors : ["#7f1442","#4e4fff","#afafaf","#a72d61","#368883","#2d7c73","#595cd4","#7007ff","#999999","#7c7c7c","#49386e","#774ad8","#6b7b81","#486f7d","#282828","#0c0c0c"]},{ name : "euphrasia", colors : ["#090c19","#e6e6e6","#1aaa13","#d0cecb","#222946","#8c8b89","#be1919","#dc2f32","#5dce33","#ffaa3e","#fadd2d","#3a57d7","#507cff","#be007f","#e671d3","#258f8f","#4dc5dc","#aeaeae","#dbdde4"]},{ name : "solarized", colors : ["#073642","#586e75","#657b83","#839496","#93a1a1","#eee8d5","#fdf6e3","#b58900","#cb4b16","#dc322f","#d33682","#6c71c4","#268bd2","#2aa198","#859900"]},{ name : "hal2", colors : ["#0d0b0d","#f3e7c6","#f3dcc6","#1e2f41","#906b61","#84252c","#c92831","#87a581","#c0bd86","#d6c08f","#f1deb7","#143a58","#1a4c72","#62162e","#7c1c3b","#566f6e","#659a91","#b99f8d"]},{ name : "venam", colors : ["#222222","#e6e3c6","#2e3436","#4a575a","#cc0000","#ef2929","#4e9a06","#8ae234","#c4a000","#fce94f","#3465a4","#729fcf","#75507b","#ad7fa8","#06989a","#34e2e2","#eeeeec"]},{ name : "parker", colors : ["#0f0e0f","#a59461","#322a2c","#46423b","#79220e","#aa261f","#344b1b","#76550f","#c77920","#b45b00","#b57f02","#434045","#908862","#5c1e25","#624a35","#394745","#393e38","#ae8842","#a59058"]},{ name : "genie", colors : ["#f0f0f0","#222222","#ababab","#91091e","#914954","#5d7003","#748040","#d37006","#d38f46","#0b5579","#526d79","#360574","#635674","#0b7d44","#587d6a","#dedede","#f2f2f2"]},{ name : "pantsu", colors : ["#a5a5a5","#161616","#343434","#802828","#909737","#b27d12","#1e5673","#642337","#196271","#b3b3b3","#424242","#8a3232","#9ca554","#ddb62b","#1e6a9a","#7d2d41","#197885"]},{ name : "vintage2", colors : ["#191716","#7d7875","#6b6765","#bfbab8","#54838f","#7a4d62","#383332","#4b483f","#745e54","#b0998e","#54745e","#8eb099","#746e54","#b0aa8e","#5e5474","#998eb0","#6e5474","#aa8eb0","#54746e","#8eb0aa","#918b88","#c7c1bd"]},{ name : "erosionedit", colors : ["#181512","#d6c3b6","#bea492","#9a875f","#8c644c","#646a6d","#332d29","#817267","#9f7155","#746c48","#857b52","#908a66","#9c956e","#e0daac","#71777a","#656565","#706d70","#463c3b","#605655","#3b484a","#444d4e","#4b5c5e","#556d70","#504339"]},{ name : "NES", colors : ["#f8f8f8","#bcbcbc","#787878","#4428bc","#6844fc","#9878f8","#d8b8f8","#6888fc","#b8b8f8","#3cbcfc","#7c7c7c"]},{ name : "s3r0", colors : ["#1f1f1f","#c0b18b","#4a3637","#d17b49","#7b8748","#af865a","#535c5c","#775759","#6d715e"]},{ name : "genie5", colors : ["#171717","#676767","#3a3a3a","#536473","#94a168","#ababab"]},{ name : "waterfront", colors : ["#88877c","#1d1e1d","#252525","#383838","#b4543f","#d38773","#7d8941","#b0a974","#b2893f","#d2a973","#7e5276","#b18695","#b45274","#d38694","#7d8876","#b0a795","#a89b8a","#baa48a"]},{ name : "fiddler", colors : ["#141314","#ccc2a6","#322a2c","#46423b","#70473a","#916255","#534d35","#858167","#9c7650","#ad8650","#473e38","#75715e","#543b3b","#6b5d51","#332425","#585858","#9a875f","#917154"]},{ name : "redhead", colors : ["#2b2c2c","#2f2f2f","#95473b","#5c7b64","#937543","#5e5f74","#893c30","#656682","#eee8d5","#474040","#a9584c","#6b8873","#b69760","#898aa3","#9a4d42","#93a1a1","#fdf6e3"]},{ name : "candy2", colors : ["#0d0b0d","#f3e7c6","#1e2f41","#906b61","#84252c","#c94428","#8b9c4d","#c0bd86","#d6c08f","#ad683b","#143a58","#236599","#e09657","#751a37","#c22c5b","#ae7d6e","#d9945f","#b99f8d"]},{ name : "vintage", colors : ["#140c0b","#cdcdcd","#403f3e","#242323","#666362","#91444d","#c78186","#6b853d","#abbd80","#916949","#cca88b","#557282","#8eabbd","#78516d","#a8879f","#58756c","#8ca8a2","#94928f"]},{ name : "sinatra", colors : ["#b2b296","#22231f","#040404","#505050","#8f5b4b","#8c513e","#94b75c","#7d9556","#d9db9f","#c4c687","#829586","#757d77","#857166","#625050","#a29f9f","#bdbdbd","#a5a38e","#a8a292"]}],settings);
	this.menu = new fadr_SettingsMenu(this.view,settings);
	this.footer = window.document.getElementsByTagName("footer")[0];
	this.menuToggle = window.document.getElementById("settings-toggle");
};
fadr_App.prototype = {
	init: function() {
		var _g = this;
		this.view.start();
		this.menuToggle.addEventListener("click",$bind(this,this.handleSettingsToggleClick),false);
		window.document.body.addEventListener("dblclick",$bind(this,this.handleDoubleClickBody),false);
		window.document.body.addEventListener("contextmenu",$bind(this,this.handleContextMenu),false);
		window.document.body.addEventListener("mousemove",$bind(this,this.handleMouseMove),false);
		this.timer = new haxe_Timer(2500);
		window.document.getElementById("title").onclick = function(_) {
			_g.toggleGUI();
		};
	}
	,toggleGUI: function() {
		if(this.menu.toggle()) this.footer.style.opacity = "1"; else this.footer.style.opacity = "0";
	}
	,handleDoubleClickBody: function(e) {
	}
	,handleContextMenu: function(e) {
		e.preventDefault();
	}
	,handleSettingsToggleClick: function(e) {
		e.preventDefault();
		this.toggleGUI();
	}
	,handleMouseMove: function(e) {
		window.document.body.style.cursor = "default";
		this.menuToggle.style.opacity = "1";
		this.timer.stop();
		this.timer = new haxe_Timer(2500);
		this.timer.run = $bind(this,this.handleTimeout);
	}
	,handleTimeout: function() {
		this.timer.stop();
		if(!this.menu.isVisible) {
			window.document.body.style.cursor = "none";
			this.menuToggle.style.opacity = "0";
			this.footer.style.opacity = "0";
		}
	}
};
var fadr_SettingsMenu = function(view,settings) {
	this.isVisible = false;
	var _g = this;
	this.view = view;
	this.element = window.document.getElementById("settings");
	var section = window.document.getElementById("settings-fade");
	this.fadeDuration = new fadr_gui_Slider("fade-duration",settings.fadeDuration,0,10000,100," ms");
	this.fadeDuration.onChange = function(v) {
		if(v == 0) v = 1;
		view.set_fadeDuration(v);
		_g.saveSettings("fadeDuration",v);
	};
	section.appendChild(this.fadeDuration.element);
	this.changeInterval = new fadr_gui_Slider("change-interval",settings.changeInterval,0,10000,100," ms");
	this.changeInterval.onChange = function(v1) {
		if(v1 == 0) v1 = 1;
		view.set_changeInterval(v1);
		_g.saveSettings("changeInterval",v1);
	};
	section.appendChild(this.changeInterval.element);
	var section1 = window.document.getElementById("settings-filter");
	this.brightness = new fadr_gui_Slider("brightness",settings.brightness,1,200,1,"%");
	this.brightness.onInput = function(v2) {
		view.set_brightness(v2);
	};
	this.brightness.onChange = function(v3) {
		_g.saveSettings("brightness",v3);
	};
	section1.appendChild(this.brightness.element);
	this.saturation = new fadr_gui_Slider("saturation",settings.saturation,0,200,1,"%");
	this.saturation.onInput = function(v4) {
		view.set_saturation(v4);
	};
	this.saturation.onChange = function(v5) {
		_g.saveSettings("saturation",v5);
	};
	section1.appendChild(this.saturation.element);
};
fadr_SettingsMenu.prototype = {
	show: function() {
		this.element.style.display = "block";
		this.isVisible = true;
	}
	,hide: function() {
		this.element.style.display = "none";
		this.isVisible = false;
	}
	,toggle: function() {
		if(this.isVisible) this.hide(); else this.show();
		return this.isVisible;
	}
	,saveSettings: function(field,value) {
		fadr_web_Storage.set({ fadeDuration : this.view._fadeDuration, changeInterval : this.view._changeInterval, brightness : this.view._brightness, saturation : this.view._saturation});
	}
};
var fadr_View = function(palettes,settings) {
	this.palettes = palettes;
	this._fadeDuration = settings.fadeDuration;
	this._changeInterval = settings.changeInterval;
	this._brightness = settings.brightness;
	this._saturation = settings.saturation;
	this.isFading = false;
	this.currentColor = "#000";
	var tmp;
	var _this = this.getRandomColorPalette().colors;
	tmp = _this.slice();
	this.colors = tmp;
	this.element = window.document.getElementById("fadr");
	this.element.addEventListener("transitionend",$bind(this,this.handleTransitionEnd),false);
	this.applyFilters();
	this.applyFadeDuration();
};
fadr_View.prototype = {
	set_fadeDuration: function(v) {
		if(v <= 0) v = 1;
		this._fadeDuration = v;
		this.applyFadeDuration();
		this.startFade();
		return v;
	}
	,set_changeInterval: function(v) {
		if(v <= 0) v = 1;
		this._changeInterval = v;
		this.startFade();
		return v;
	}
	,set_brightness: function(v) {
		this._brightness = v;
		this.applyFilters();
		return v;
	}
	,set_saturation: function(v) {
		this._saturation = v;
		this.applyFilters();
		return v;
	}
	,start: function() {
		this.startFade();
	}
	,startFade: function() {
		if(this.timer != null) {
			this.timer.stop();
			this.timer = null;
		}
		this.isFading = true;
		this.nextColor = this.getRandomColor();
		this.element.style.backgroundColor = this.nextColor;
	}
	,handleTransitionEnd: function(e) {
		this.isFading = false;
		this.currentColor = this.nextColor;
		this.timer = new haxe_Timer(this._changeInterval);
		this.timer.run = $bind(this,this.handleTimeout);
	}
	,handleTimeout: function() {
		this.startFade();
	}
	,applyFadeDuration: function() {
		this.element.style.transitionDuration = this._fadeDuration + "ms";
	}
	,applyFilters: function() {
		var str = "brightness(" + this._brightness + "%) saturate(" + this._saturation + "%)";
		this.element.style.filter = str;
		this.element.style.webkitFilter = str;
		this.element.style.mozFilter = str;
	}
	,getRandomColorPalette: function() {
		var tmp;
		var x = Math.random() * this.palettes.length;
		tmp = x | 0;
		return this.palettes[tmp];
	}
	,getRandomColor: function() {
		var color = null;
		var i = null;
		while(true) {
			var tmp;
			var x = Math.random() * this.colors.length;
			tmp = x | 0;
			i = tmp;
			color = this.colors[i];
			if(color != this.currentColor) break;
		}
		this.colors.splice(i,1);
		if(this.colors.length == 0) {
			var palette = this.getRandomColorPalette();
			this.colors = palette.colors.slice();
		}
		return color;
	}
};
var fadr_gui_Slider = function(id,value,min,max,step,postText) {
	this.postText = postText;
	this.min = min;
	this.max = max;
	this.step = step;
	var tmp;
	var _this = window.document;
	tmp = _this.createElement("div");
	this.element = tmp;
	this.element.classList.add("slider");
	var tmp1;
	var _this1 = window.document;
	tmp1 = _this1.createElement("div");
	var title = tmp1;
	title.classList.add("title");
	title.textContent = id;
	this.element.appendChild(title);
	var tmp2;
	var _this2 = window.document;
	tmp2 = _this2.createElement("div");
	this.label = tmp2;
	this.label.classList.add("label");
	this.element.appendChild(this.label);
	var tmp3;
	var _this3 = window.document;
	tmp3 = _this3.createElement("input");
	this.input = tmp3;
	this.input.type = "range";
	this.input.id = id;
	this.input.min = "" + min;
	this.input.max = "" + max;
	this.input.step = "" + step;
	this.element.appendChild(this.input);
	this.set_value(value);
	this.input.addEventListener("input",$bind(this,this.handleInput),false);
	this.input.addEventListener("change",$bind(this,this.handleInputChange),false);
	this.input.addEventListener("mousewheel",$bind(this,this.handleMouseWheel),false);
};
fadr_gui_Slider.prototype = {
	onInput: function(v) {
	}
	,onChange: function(v) {
	}
	,set_value: function(v) {
		if(v < this.min) v = this.min; else if(v > this.max) v = this.max;
		this.input.value = "" + v;
		this.updateLabelText();
		return v;
	}
	,updateLabelText: function() {
		var str = this.input.value;
		if(this.postText != null) str += "" + this.postText;
		this.label.textContent = str;
	}
	,handleInput: function(e) {
		this.updateLabelText();
		this.onInput(Std.parseInt(this.input.value));
	}
	,handleInputChange: function(e) {
		this.updateLabelText();
		this.onChange(Std.parseInt(this.input.value));
	}
	,handleMouseWheel: function(e) {
		var v = e.wheelDelta > 0?Std.parseInt(this.input.value) + this.step * 5:Std.parseInt(this.input.value) - this.step * 5;
		this.set_value(v);
		this.onInput(Std.parseInt(this.input.value));
		this.onChange(Std.parseInt(this.input.value));
	}
};
var fadr_web_App = function(settings) {
	this.isFullscreen = false;
	fadr_App.call(this,settings);
};
fadr_web_App.main = function() {
	window.onload = function(_) {
		var app = new fadr_web_App(fadr_web_Storage.get());
		haxe_Timer.delay($bind(app,app.init),1);
	};
};
fadr_web_App.__super__ = fadr_App;
fadr_web_App.prototype = $extend(fadr_App.prototype,{
	handleDoubleClickBody: function(e) {
		this.toggleFullscreen();
	}
	,handleContextMenu: function(e) {
		fadr_App.prototype.handleContextMenu.call(this,e);
		this.toggleGUI();
	}
	,toggleFullscreen: function() {
		if(this.isFullscreen) {
			window.document.webkitExitFullscreen();
			this.isFullscreen = false;
		} else {
			window.document.body.webkitRequestFullscreen();
			this.isFullscreen = true;
		}
	}
});
var js_Browser = function() { };
js_Browser.getLocalStorage = function() {
	try {
		var s = window.localStorage;
		s.getItem("");
		return s;
	} catch( e ) {
		return null;
	}
};
var fadr_web_Storage = function() { };
fadr_web_Storage.get = function() {
	var _data = fadr_web_Storage.storage.getItem("fadr");
	if(_data == null) {
		var defaultSettings = { brightness : 100, saturation : 100, fadeDuration : 1000, changeInterval : 1000};
		fadr_web_Storage.set(defaultSettings);
		return defaultSettings;
	} else return JSON.parse(_data);
};
fadr_web_Storage.set = function(data) {
	fadr_web_Storage.storage.setItem("fadr",JSON.stringify(data));
};
var haxe_Timer = function(time_ms) {
	var me = this;
	this.id = setInterval(function() {
		me.run();
	},time_ms);
};
haxe_Timer.delay = function(f,time_ms) {
	var t = new haxe_Timer(time_ms);
	t.run = function() {
		t.stop();
		f();
	};
	return t;
};
haxe_Timer.prototype = {
	stop: function() {
		if(this.id == null) return;
		clearInterval(this.id);
		this.id = null;
	}
	,run: function() {
	}
};
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
fadr_web_Storage.storage = js_Browser.getLocalStorage();
fadr_web_App.main();
})(typeof console != "undefined" ? console : {log:function(){}});
