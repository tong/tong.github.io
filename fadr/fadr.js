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
	this.view = new fadr_View([{ name : "erosionlight", colors : ["#e0daac","#856a2a","#ffdcc4","#93a1a1","#8c644c","#646a6d","#746C48","#50443b","#817267","#9f7155","#8F8558","#bfba92","#E0DAAC","#777E82","#6d6871","#756f7b","#766782","#897796","#3b484a","#444d4e","#4B5C5E","#556D70","#504339","#9a875f"]},{ name : "candy", colors : ["#F3E7c6","#0d0b0d","#1E2F41","#906B61","#84252C","#c94428","#ae7d6e","#C0BD86","#D6C08F","#Ad683b","#143A58","#E09657","#62162E","#7C1C3B","#8B9c4d","#D9945F","#B99F8D"]},{ name : "jellybean", colors : ["#151515","#888888","#1C1C1C","#404040","#B85335","#CF6A4C","#799D6A","#99AD6A","#FFB964","#FAD07A","#667899","#8197BF","#8787AF","#C6B6EE","#668799","#8FBFDC","#E8E8D3"]},{ name : "plastique", colors : ["#1C1B18","#B3AE98","#36342E","#8C4F30","#A65D38","#8C815E","#A6986F","#8C6F46","#A68353","#4F4235","#695746","#8C3047","#A63854","#8C6D5E","#A6816F","#999582"]},{ name : "hal1", colors : ["#738A8A","#181512","#CA5E64","#3B444F","#4A585A","#CD546C","#EF545F","#A5AF86","#BDC79E","#CD7860","#E88773","#7A9388","#94B1A3","#75434C","#BB6C73","#767D75","#9DA69E","#C2C2A8","#DBDAC1"]},{ name : "blackburn", colors : ["#020202","#F2F1F0","#F67730","#222222","#666666","#D23D3D","#E84F4F","#B7CE42","#BDE077","#F6784F","#F07746","#7DC1CF","#66AABB","#4E9FB1","#AACCBB","#B7416E","#E16A98","#6D878D","#42717B"]},{ name : "erosionbrighter", colors : ["#181512","#D9BBA7","#4D443E","#9C897C","#A66B49","#B8764F","#8C8149","#9E8F51","#A89F66","#B5AA6E","#6F7E87","#7B8B94","#7A6460","#655B5B","#547478","#5B848A","#69523F","#B3965B"]},{ name : "cathulu", colors : ["#a6a6a6","#121212","#6E484e","#333333","#474747","#63484e","#486350","#6f6b56","#56676f","#63485b","#636363"]},{ name : "clean", colors : ["#262729","#f8f8f2","#b5d2dd","#5e7175","#FFFFFF","#a6e22e","#626262","#f92671","#ff669d","#beed5f","#fd971f","#e6db74","#1692d0","#66d9ef","#9e6ffe","#df92f6","#a3babf","#ffffff"]},{ name : "clouds", colors : ["#0E0E0E","#fefefe","#454545","#666666","#CC4747","#BF5858","#A0CF5D","#B8D68C","#FF9B52","#FFB680","#5FA69B","#99C7BF","#A966CC","#BD9FCC","#6CAB79","#95BA9C","#d3d3d3"]},{ name : "colors", colors : ["#D7D0C7","#151515","#AF875F","#404040","#E84F4F","#D23D3D","#B8D68C","#A0CF5D","#E1AA5D","#F39D21","#7DC1CF","#4E9FB1","#9B64FB","#8542FF","#6D878D","#42717B","#dddddd","#ffffff","#ff8939"]},{ name : "butter", colors : ["#917154","#E3AB8D","#F0E5DF","#cd546c","#eddcd3","#181512","#252525","#454545","#CD546C","#EF545F","#A5AF86","#BDC79E","#CD7860","#E88773","#7A9388","#94B1A3","#989584","#767D75","#9DA69E","#C2C2A8","#DBDAC1"]},{ name : "jmrl1", colors : ["#DDCCBB","#101010","#25221C","#171512","#D9751E","#B5651F","#C23E4D","#A8313E","#C99222","#AD8128","#534FD1","#3834c5","#8C5922","#854E13","#458AE6","#2E6FC7","#BEB888","#ABA576"]},{ name : "charlie_brown", colors : ["#FFFFFF","#CFEAFB","#DEF6FE","#EF3828","#F16328","#48A052","#749077","#C1A564","#D6B075","#448FBF","#02A0D6","#877EAA","#B0BCE6","#D394B9","#6AB7E2","#A7D9F1","#110102","#26312A"]},{ name : "cryptred", colors : ["#A80036","#666666","#FFFFFF","#D3D3D3","#111111","#181818","#D7D7D7","#740629","#D4D4D4"]},{ name : "danuce", colors : ["#0d0b0d","#f3e7c6","#1e2f41","#906b61","#753b39","#7f403e","#52633e","#5f7348","#965142","#a6594a","#486569","#306769","#503b66","#6d4f8a","#29635b","#2f7066","#b99f8d","#f3dcc6"]},{ name : "beard", colors : ["#191716","#daba8b","#0f0e0d","#383332","#845336","#8c4f4a","#57553c","#898471","#a17e3e","#c8b491","#43454f","#65788f","#604848","#755e4a","#5c6652","#718062","#a18b62","#bc9d66"]},{ name : "bloom", colors : ["#03000d","#efecdd","#5d4f2d","#180f00","#c45553","#7f0009","#97a007","#6d9600","#8c754c","#925238","#365e5b","#135972","#924955","#6a0007","#098e80","#dacebf","#c7b59f"]},{ name : "erosiondark", colors : ["#bea492","#181512","#252525","#454545","#8c5b3e","#9f6744","#A5AF86","#BDC79E","#965142","#a6594a","#7A9388","#94B1A3","#917154","#989584","#767D75","#9DA69E","#b99f8d","#DCC58F"]},{ name : "cryptmatrix", colors : ["#AFE690","#666666","#FFFFFF","#D3D3D3","#111111","#181818","#D7D7D7","#D4D4D4"]},{ name : "wooly", colors : ["#181512","#D6C3B6","#ffdcc4","#93a1a1","#8c644c","#646a6d","#746C48","#332d29","#817267","#953B00","#DC5E0A","#705A29","#88832F","#FC9713","#F6AE62","#777E82","#6d6871","#756f7b","#766782","#897796","#3b484a","#444d4e","#4B5C5E","#556D70","#504339","#9a875f"]},{ name : "solarized_light", colors : ["#073642","#586e75","#657b83","#839496","#93a1a1","#eee8d5","#fdf6e3","#b58900","#cb4b16","#dc322f","#d33682","#6c71c4","#268bd2","#2aa198","#859900"]},{ name : "crypt", colors : ["#AADB0F","#666666","#FFFFFF","#AAD80F","#D3D3D3","#111111","#181818","#D7D7D7","#91BA0D","#D4D4D4"]},{ name : "gutter", colors : ["#1a1b1c","#808080","#484848","#666767","#a1756c","#d1aca3","#719171","#aad1ac","#9c9869","#c3c49f","#7186a6","#a6c0de","#876794","#bea2cf","#628c85","#a1d4c2","#8f8f8f","#cacbcb"]},{ name : "jmbi", colors : ["#1e1e1e","#ffffff","#5A7260","#8DA691","#8F423C","#EEAA88","#BBBB88","#CCC68D","#F9D25B","#EEDD99","#E0BA69","#C9B957","#709289","#FFCBAB","#D13516","#C25431","#EFE2E0","#F9F1ED"]},{ name : "neeee", colors : ["#cbc6cc","#19171a","#242224","#4c4b4d","#b8b2b9","#ece8ed","#995876","#f895c4","#748c71","#b3d6ae","#9c8f6a","#f4e1ab","#7086a8","#bcd8ff","#97729c","#dfbaf5","#698c8c","#aae3db"]},{ name : "bw_w2", colors : ["#FFFFFF","#D8D8D8","#808080","#B3B3B3","#BFBFBF","#999999","#A6A6A6","#8C8C8C","#666666","#737373","#4D4D4D","#595959","#333333","#404040","#191919","#282828"]},{ name : "papey", colors : ["#e5e5e5","#1d1d1d","#121212","#5f5f5F","#a35b66","#ab6b74","#99ab6f","#acb792","#ca9733","#ccaa69","#495d6e","#687987","#825969","#977381","#839191","#98A4A4","#E0E0E0"]},{ name : "poppy", colors : ["#f0f0f0","#181512","#373737","#474747","#CC4141","#BA2929","#43803D","#2F632A","#7882BF","#596196","#DBAB3B","#C79520","#BF849C","#B06A86","#6AA9B0","#4D8B91","#E39036","#C97820"]},{ name : "form", colors : ["#3a3a3a","#8c5b3e","#80764d","#917154","#596875","#6e464b","#495e61","#bcbcaf","#505050","#9f6744","#80785a","#917963","#656d75","#6e5155","#525F61","#c1c4bc"]},{ name : "neue", colors : ["#a0a0a0","#333333","#1b1d1e","#ccccc6","#bebeb4","#3d3e3d","#5a5b5c","#755a5b","#a37679","#68755a","#87a376","#756e5a","#a39b76","#5b6976","#758ba3","#755b76","#9f76a3","#465457","#899ca1","#f8f8f2"]},{ name : "ancient", colors : ["#181512","#bea492","#93a1a1","#332d29","#817267","#8c644c","#9f7155","#c4be90","#bec17e","#bfba92","#fafac0","#293033","#303b40","#646a6d","#626e74","#6d6871","#756f7b","#3b484a","#444d4e","#504339","#9a875f"]},{ name : "thawedit", colors : ["#170F0D","#746C48","#bea492","#AF652F","#C8B984","#392925","#544B2E","#98724C","#A6A53A","#908F32","#C3C13D","#BDA754","#AA964C","#C8B55B","#7B854E","#70A16C","#929E5D","#6B5644","#5C5142","#778725","#E4DC8C","#504339","#9a875f"]},{ name : "erosion", colors : ["#181512","#bea492","#93a1a1","#332d29","#817267","#8c644c","#9f7155","#c4be90","#bec17e","#bfba92","#fafac0","#293033","#303b40","#646a6d","#626e74","#6d6871","#756f7b","#3b484a","#444d4e","#504339","#9a875f"]},{ name : "clear", colors : ["#FFFFFF","#101010","#404040","#E84F4F","#D23D3D","#B8D68C","#A0CF5D","#E1AA5D","#F39D21","#7DC1CF","#4E9FB1","#9B64FB","#8542FF","#6D878D","#42717B","#dddddd"]},{ name : "erosionbright", colors : ["#181512","#bea492","#9a875f","#8c644c","#646a6d","#332d29","#4D443E","#BF8868","#746C48","#A69B67","#908A66","#C2BA89","#949CA1","#656565","#706D70","#463c3b","#605655","#948583","#3b484a","#444d4e","#4B5C5E","#748E91","#504339"]},{ name : "bw_w", colors : ["#FFFFFF","#4E4FFF","#9A9A9A","#121212","#1C1C1C","#A5A5A5","#A4A4A4","#777777","#646464","#999999","#7C7C7C","#4C4C4C","#515151","#2B2B2B","#322929","#101010"]},{ name : "cryptedit", colors : ["#AADB0F","#666666","#FFFFFF","#AAD80F","#D3D3D3","#111111","#181818","#D7D7D7","#91BA0D","#D4D4D4"]},{ name : "nebula", colors : ["#080808","#aaaaaa","#343639","#424242","#CE5666","#d75f5f","#80A673","#97D599","#ffaf5f","#e0bc93","#5A667F","#778BAF","#94738C","#D8ADCE","#5f8787","#69b2b2","#909090","#d7d7d7"]},{ name : "dawn", colors : ["#9b9081","#181b20","#353535","#744b40","#6d6137","#765636","#61564b","#6b4a49","#435861","#b3b3b3","#5f5f5f","#785850","#6f6749","#776049","#696057","#6f5a59","#525f66","#cdcdcd"]},{ name : "sawyr", colors : ["#1c1709","#c2b9a1","#4f4939","#8e4317","#f07935","#787200","#d9d138","#945c00","#ffab26","#315094","#8aa9ed","#5c2e40","#ff8cb8","#43bfe0","#f2e8c9"]},{ name : "ok100", colors : ["#140c0b","#877a70","#58756c","#cdcdcd","#6b753d","#403f3e","#666362","#91444d","#c78186","#6b853d","#abbd80","#916949","#cca88b","#557282","#8eabbd","#78516d","#a8879f","#8ca8a2","#94928f"]},{ name : "blue", colors : ["#b2b2b2","#927d9e","#6e98b8","#7791e0","#FFFFFF","#343639","#404040","#2f468e","#424242","#828a8c","#6b8ba3","#8ebdde","#1c4582","#5365a6","#74637d","#556c85","#bdbdbd"]},{ name : "space", colors : ["#d0d0d0","#c37561","#a0a57e","#202020","#ddccbb","#222222","#666666","#cc4747","#bf5858","#a0cf5d","#b8d68c","#e0a524","#edB85c","#4194d9","#60aae6","#cc2f6e","#db588c","#6d878d","#42717b","#dedede","#f2f2f2"]},{ name : "jmrl2", colors : ["#0D0B0D","#C4C3AF","#213559","#182A4A","#802D14","#732811","#174A21","#113D19","#94632B","#855621","#851416","#750D0F","#59514c","#453d38","#856D3A","#7A6330","#8B8C72","#797A62"]},{ name : "erosionbrightest", colors : ["#181512","#D9BBA7","#4D443E","#9C897C","#BF8868","#D1946F","#A69B67","#B8AA71","#C2BA89","#CFC592","#949CA1","#A1A9AD","#948583","#808080","#748E91","#7C9EA3","#826D5C","#CCB27D"]},{ name : "smooth", colors : ["#181512","#f7f7f7","#348c51","#f0f0f0","#f0f7f0","#f7f0f0","#272727","#3a2b5a","#503151","#742d3f","#a7552e","#d8be58","#cda8b0","#474747","#453457","#6f3e5e","#923a46","#c1653e","#fbcf76","#40aa5a","#dec1b9"]},{ name : "bw_b", colors : ["#FFFFFF","#090909","#111111","#181818","#222222","#272727","#333333","#393939","#444444","#484848","#555555","#595959","#666666","#707070","#777777","#818181"]},{ name : "barrage", colors : ["#1b1d20","#a5a5a5","#323232","#823A45","#878c49","#BA954A","#335F79","#7F3A60","#1E4E51","#b3b3b3","#424242","#82444C","#A5AC69","#E3C55B","#548098","#7F4766","#2D5D5F","#b0b0b0"]},{ name : "venam2", colors : ["#191919","#AFAF87","#46423b","#a04363","#ae837a","#9b9329","#b4aa30","#bf7a29","#c7a551","#6a8c8c","#74999e","#856774","#9c818e","#757978","#9fa590","#bcbcaf","#c1c4bc"]},{ name : "fallac", colors : ["#30303a","#d6d6d6","#777777","#aaaaaa","#6fa5df","#4a4a4a","#c29198","#a0616a","#df6f6f","#eba8a8","#abd8a5","#80a27b","#6fdfa4","#a8ebc8","#acacac","#858585","#dfdc6f","#ebeaa8","#a8c9eb","#846fdf","#b5a8eb","#6fcadf","#a6e6eb","#c3c3c3"]},{ name : "hal3", colors : ["#101010","#D2C5BC","#202020","#606060","#B91E2E","#D14548","#81957C","#A7B79A","#F9BB80","#FAE3A0","#356579","#7491A1","#2D2031","#87314E","#0B3452","#0F829D","#909090","#FFF0F0"]},{ name : "fresh", colors : ["#DDCCBB","#30251D","#151515","#393939","#AF875F","#BF1E2D","#E7212A","#9DBA3A","#A9C938","#F5B915","#F7D325","#1CA1DB","#652F90","#894E9F","#EA7D24","#F79321","#E7E8E9","#F3F3F4"]},{ name : "erosion2", colors : ["#ffffff","#93a1a1","#332d29","#817267","#8c644c","#9f7155","#c4be90","#bec17e","#bfba92","#fafac0","#293033","#303b40","#646a6d","#626e74","#6d6871","#756f7b","#3b484a","#444d4e","#504339","#9a875f"]},{ name : "julie", colors : ["#c6a57b","#151515","#101010","#404040","#953331","#8D4A48","#546A29","#7E9960","#909737","#9CA554","#385E6B","#5C737C","#7F355E","#95618B","#34676F","#5D858A","#dddddd"]},{ name : "gohucolor", colors : ["#0D131A","#8A9499","#FFFFFF","#44484C","#802635","#B3354C","#608040","#4BA65A","#877C43","#BF9F5F","#1C678C","#3995BF","#684D80","#A64286","#337373","#6AAAB3","#738080","#B3B3B3"]},{ name : "thaw", colors : ["#170F0D","#746C48","#bea492","#AF652F","#C8B984","#392925","#544B2E","#98724C","#908F32","#C3C13D","#AA964C","#C8B55B","#7B854E","#70A16C","#6B5644","#5C5142","#778725","#E4DC8C"]},{ name : "plain", colors : ["#1C1B18","#CCC7AE","#35342D","#736D61","#8C8577","#898C77","#A2A68D","#A6A68D","#BFBFA3","#4F4D43","#A69A8D","#BFB1A2","#737061","#8C8977","#B3AE98"]},{ name : "cryptetsy", colors : ["#E2791B","#666666","#FFFFFF","#D3D3D3","#111111","#181818","#D7D7D7","#BF3C0A","#D4D4D4"]},{ name : "notch", colors : ["#a0a0a0","#222222","#383838","#474747","#A95551","#A97775","#666666","#8C8C8C","#A98051","#A99175","#657D3E","#98BD5E","#767676","#A3A3A3","#C9C9C9","#DCDCDC","#D0B8A3","#D8C8BB","#acacab","#1a1a1a","#050505","#e9897c","#b6377d","#ecebbe","#a9cdeb","#75507b","#c9caec","#f2f2f2","#141414","#f99286","#c3f786","#fcfbcc","#b6defb","#ad7fa8","#d7d9fc","#e2e2e2","#6f716d","#151310","#322b21","#3a3023","#51473b","#514b44","#4f483e","#63533c","#494339","#3d3933","#474438","#5f5b4c","#504836","#504a3d","#26231e","#262421","#36312d","#342f2b","#272521","#575655","#928d8c","#706f69","#a6a399","#737373","#4a4949","#6e6d69","#4a4a4a","#929292","#565656","#949494","#3d3d3d","#545454","#767776","#ffffff","#555753","#ff6565","#ff8d8d","#93d44f","#c8e7a8","#eab93d","#ffc123","#204a87","#3465a4","#ce5c00","#f57900","#89b6e2","#46a4ff","#cccccc","#DDEEDD","#1C1C1C","#4d4d4d","#D81860","#F00060","#B7CE42","#BDE077","#FEA63C","#FFE863","#66AABB","#AACCBB","#B7416E","#BB4466","#5E7175","#A3BABF","#6C887A","#382d22","#c37b5f","#9cb955","#bba85b","#748e9b","#925e5a","#5f9566","#bdbc8f","#4a3f2e","#e19688","#c0d584","#dbc585","#a3bac5","#ba8092","#8cb9a2","#dbd5ba","#a0c0e0","#6080a0","#6080c0","#4060c0","#4060a0","#e0f0f0","#2060c0","#FFFFFF","#262729","#554444","#EA6868","#FF7272","#ABCB8D","#AFD78A","#E8AE5B","#FFA75D","#71C5F4","#67CDE9","#E2BAF1","#ECAEE9","#21F1EA","#36FFFC","#F1F1F1","#3d352a","#cd5c5c","#86af80","#e8ae5b","#6495ed","#deb887","#b0c4de","#bbaa99","#cc5533","#88aa22","#ffa75d","#87ceeb","#996600","#ddccbb","#1B1D1E","#F92672","#FF669D","#A6E22E","#BEED5F","#FD971F","#E6DB74","#66D9EF","#9E6FFE","#CCCCC6","#F8F8F2","#242424","#cdb5cd","#bf7979","#f4a45f","#97b26b","#c5f779","#cdcda1","#ffffaf","#86a2be","#98afd9","#d9b798","#d7d998","#a1b5cd","#dedede","#3f3f3f","#dcdccc","#1E2320","#705050","#60b48a","#dfaf8f","#506070","#dc8cc3","#8cd0d3","#709080","#dca3a3","#c3bf9f","#f0dfaf","#94bff3","#ec93d3","#93e0e3"]},{ name : "blackgum", colors : ["#ECEDEE","#111111","#2E1F1F","#422D2D","#AA0E50","#BE0E50","#1DCC9F","#1FD9A9","#27C282","#2CDB93","#7182A8","#8194BF","#A673A6","#7F5AA1","#6DA3A1","#669997","#B7BBBD","#D9D9D9"]},{ name : "beastie", colors : ["#c3c2c5","#1c1c1c","#505050","#cd5c5c","#e5505f","#8eae71","#95c749","#d2b48c","#ffa75d","#6495ed","#7E62B3","#a488d9","#5f7b8a","#665c64","#cacaca"]},{ name : "ratpoison", colors : ["#232323","#e8e9ca","#8b3e2f","#526f33","#8B814C","#4A708B","#7A378B","#528B8B","#999999","#4c4c4c","#d75f00","#8ea433","#EEE685","#9AC0CD","#9F79EE","#79CDCD","#E8E9CA"]},{ name : "gekko", colors : ["#bea492","#181512","#1D2930","#1D1D25","#1F1D24","#233439","#283E41","#314B49","#3D645C","#516D5B","#728B6E","#7BA081","#9BA177","#B1B285","#C8CC97","#CABB86","#CDB77C","#E6CF8E"]},{ name : "erosioncontrast", colors : ["#111111","#d8d8d8","#8c5b3e","#80764d","#917154","#596875","#6e464b","#495e61","#bcbcaf","#505050","#9f6744","#80785a","#917963","#656d75","#6e5155","#525F61","#c1c4bc","#c6c6c6"]},{ name : "xmas", colors : ["#7F1442","#FFFFFF","#4E4FFF","#AFAFAF","#A72D61","#368883","#2D7C73","#595cd4","#7007FF","#999999","#7C7C7C","#49386E","#774AD8","#6B7B81","#486F7D","#282828","#0C0C0C"]},{ name : "euphrasia", colors : ["#090C19","#E6E6E6","#1AAA13","#D0CECB","#222946","#8C8B89","#BE1919","#DC2F32","#5DCE33","#FFAA3E","#FADD2D","#3A57D7","#507CFF","#BE007F","#E671D3","#258F8F","#4DC5DC","#AEAEAE","#DBDDE4"]},{ name : "solarized", colors : ["#073642","#586e75","#657b83","#839496","#93a1a1","#eee8d5","#fdf6e3","#b58900","#cb4b16","#dc322f","#d33682","#6c71c4","#268bd2","#2aa198","#859900"]},{ name : "hal2", colors : ["#0D0B0D","#F3E7C6","#F3DCC6","#1E2F41","#906B61","#84252C","#C92831","#87A581","#C0BD86","#D6C08F","#F1DEB7","#143A58","#1A4C72","#62162E","#7C1C3B","#566F6E","#659A91","#B99F8D"]},{ name : "venam", colors : ["#222222","#e6e3c6","#2E3436","#4a575a","#CC0000","#EF2929","#4E9A06","#8AE234","#C4A000","#FCE94F","#3465A4","#729FCF","#75507B","#AD7FA8","#06989A","#34E2E2","#EEEEEC"]},{ name : "parker", colors : ["#0F0E0F","#A59461","#322a2c","#46423b","#79220E","#AA261F","#344B1B","#76550F","#c77920","#B45B00","#B57F02","#434045","#908862","#5C1E25","#624A35","#394745","#393E38","#AE8842","#A59058"]},{ name : "genie", colors : ["#f0f0f0","#222222","#ababab","#91091e","#914954","#5d7003","#748040","#d37006","#d38f46","#0b5579","#526d79","#360574","#635674","#0b7d44","#587d6a","#dedede","#f2f2f2"]},{ name : "pantsu", colors : ["#a5a5a5","#161616","#343434","#802828","#909737","#b27d12","#1e5673","#642337","#196271","#b3b3b3","#424242","#8a3232","#9ca554","#ddb62b","#1e6a9a","#7d2d41","#197885"]},{ name : "vintage2", colors : ["#191716","#7D7875","#6B6765","#BFBAB8","#54838F","#7A4D62","#383332","#4B483F","#745E54","#B0998E","#54745E","#8EB099","#746E54","#B0AA8E","#5E5474","#998EB0","#6E5474","#AA8EB0","#54746E","#8EB0AA","#918B88","#C7C1BD"]},{ name : "erosionedit", colors : ["#181512","#D6C3B6","#bea492","#9a875f","#8c644c","#646a6d","#332d29","#817267","#9f7155","#746C48","#857B52","#908A66","#9C956E","#E0DAAC","#71777A","#656565","#706D70","#463c3b","#605655","#3b484a","#444d4e","#4B5C5E","#556D70","#504339"]},{ name : "NES", colors : ["#f8f8f8","#bcbcbc","#787878","#4428BC","#6844FC","#9878F8","#D8B8F8","#6888FC","#B8B8F8","#3CBCFC","#9878f8","#7c7c7c"]},{ name : "s3r0", colors : ["#1f1f1f","#c0b18b","#4A3637","#d17b49","#7b8748","#af865a","#535C5C","#775759","#6d715e"]},{ name : "genie5", colors : ["#171717","#676767","#3a3a3a","#536473","#94a168","#ababab"]},{ name : "waterfront", colors : ["#88877C","#1D1E1D","#252525","#383838","#b4543f","#d38773","#7d8941","#b0a974","#b2893f","#d2a973","#7e5276","#b18695","#b45274","#d38694","#7d8876","#b0a795","#A89B8A","#BAA48A"]},{ name : "fiddler", colors : ["#141314","#ccc2a6","#322a2c","#46423b","#70473a","#916255","#534d35","#858167","#9c7650","#ad8650","#473e38","#75715e","#543b3b","#6b5d51","#332425","#585858","#9a875f","#917154"]},{ name : "redhead", colors : ["#2b2c2c","#ffffff","#2f2f2f","#95473b","#5c7b64","#937543","#5e5f74","#893c30","#656682","#eee8d5","#474040","#a9584c","#6b8873","#b69760","#898aa3","#9a4d42","#93a1a1","#fdf6e3"]},{ name : "candy2", colors : ["#0d0b0d","#f3e7c6","#1E2F41","#906B61","#84252C","#c94428","#8B9c4d","#C0BD86","#D6C08F","#Ad683b","#143A58","#236599","#E09657","#751A37","#C22C5B","#ae7d6e","#D9945F","#B99F8D"]},{ name : "vintage", colors : ["#140c0b","#cdcdcd","#FFFFFF","#403f3e","#242323","#666362","#91444d","#c78186","#6b853d","#abbd80","#916949","#cca88b","#557282","#8eabbd","#78516d","#a8879f","#58756c","#8ca8a2","#94928f"]},{ name : "sinatra", colors : ["#B2B296","#22231F","#040404","#505050","#8F5B4B","#8C513E","#94B75C","#7D9556","#D9DB9F","#C4C687","#829586","#757D77","#857166","#625050","#A29F9F","#BDBDBD","#A5A38E","#A8A292"]}],settings);
	this.menu = new fadr_SettingsMenu(this.view,settings);
	this.title = window.document.getElementsByTagName("header")[0];
	this.footer = window.document.getElementsByTagName("footer")[0];
	this.hideGUI();
};
fadr_App.prototype = {
	init: function() {
		this.view.start();
		window.document.body.addEventListener("dblclick",$bind(this,this.handleDoubleClickBody),false);
		window.document.body.addEventListener("contextmenu",$bind(this,this.handleContextMenu),false);
		window.document.body.addEventListener("mousemove",$bind(this,this.handleMouseMove),false);
		this.timer = new haxe_Timer(2500);
		this.timer.run = $bind(this,this.handleTimeout);
	}
	,hideGUI: function() {
		this.title.style.opacity = this.footer.style.opacity = "0";
		this.menu.hide();
		window.document.body.style.cursor = "none";
	}
	,handleDoubleClickBody: function(e) {
	}
	,handleContextMenu: function(e) {
	}
	,handleMouseMove: function(e) {
		this.title.style.opacity = this.footer.style.opacity = "1";
		this.menu.show();
		window.document.body.style.cursor = "default";
		this.timer.stop();
		this.timer = new haxe_Timer(2500);
		this.timer.run = $bind(this,this.handleTimeout);
	}
	,handleTimeout: function() {
		this.timer.stop();
		if(!this.menu.isMouseOver) this.hideGUI();
	}
};
var fadr_SettingsMenu = function(view,settings) {
	this.isVisible = false;
	this.isMouseOver = false;
	var _g = this;
	this.view = view;
	this.element = window.document.getElementById("settings");
	var section = window.document.getElementById("settings-fade");
	this.fadeDuration = new fadr_gui_Slider("fade-duration",settings.fadeDuration,0,10000,100," ms");
	this.fadeDuration.onChange = function(v) {
		view.set_fadeDuration(v);
		_g.saveSettings("fadeDuration",v);
	};
	section.appendChild(this.fadeDuration.element);
	this.changeInterval = new fadr_gui_Slider("change-interval",settings.changeInterval,0,10000,100," ms");
	this.changeInterval.onChange = function(v1) {
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
	this.element.onmouseover = function(_) {
		_g.isMouseOver = true;
	};
	this.element.onmouseout = function(_1) {
		_g.isMouseOver = false;
	};
};
fadr_SettingsMenu.prototype = {
	show: function() {
		this.element.style.opacity = "1";
		this.isVisible = true;
	}
	,hide: function() {
		this.element.style.opacity = "0";
		this.isVisible = false;
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
	toggleFullscreen: function() {
		if(this.isFullscreen) {
			window.document.webkitExitFullscreen();
			this.isFullscreen = false;
		} else {
			window.document.body.webkitRequestFullscreen();
			this.isFullscreen = true;
		}
	}
	,handleDoubleClickBody: function(e) {
		this.toggleFullscreen();
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

//# sourceMappingURL=fadr.js.map