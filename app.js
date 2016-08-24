!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t()
else if("function"==typeof define&&define.amd)define([],t)
else{var e
e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.McHead=t()}}(function(){return function t(e,i,s){function r(n,a){if(!i[n]){if(!e[n]){var h="function"==typeof require&&require
if(!a&&h)return h(n,!0)
if(o)return o(n,!0)
var u=new Error("Cannot find module '"+n+"'")
throw u.code="MODULE_NOT_FOUND",u}var l=i[n]={exports:{}}
e[n][0].call(l.exports,function(t){var i=e[n][1][t]
return r(i?i:t)},l,l.exports,t,e,i,s)}return i[n].exports}for(var o="function"==typeof require&&require,n=0;n<s.length;n++)r(s[n])
return r}({1:[function(t,e,i){function s(t){var e=new Image
return e.onload=function(){var e=this.width,i=this.height
64!=e||64!=i&&32!=i?alert("Given image of size "+e+"px wide and "+i+"px high doesn't correspond with a Minecraft skin resoultion (64x32 or 64x64)!"):(t.model.setImage(this,e,i),t.justRender())},e}function r(t,e){var i=new FileReader,r=s(t)
i.onload=function(t){r.src=t.target.result},i.readAsDataURL(e)}var o=t("./dom"),n=t("./utils"),a=t("./camera"),h=t("./model"),u=t("./mouse"),l=e.exports=function(t,e,i,s,r){this.options=t,this.canvas=e,this.output=i,this.size=n.point(s,r)}
l.prototype={init:function(){this.initThree(),this.initModel(),this.initMouseHandler(),this.initOptions()},initThree:function(){var t=this,e=this.size.x,i=this.size.y,s=new a(e,i,50,.1,1e3,(-1e3),1e3),r=new THREE.Scene,o=new THREE.TextureLoader,n=new THREE.WebGLRenderer({preserveDrawingBuffer:!0,alpha:!0})
n.setClearColor(16777215,0),n.setSize(e,i),n.domElement.className="renderer",this.canvas.appendChild(n.domElement),o.load("steve.png",function(e){t.model.setTexture(e),t.justRender()}),this.scene=r,this.renderer=n,this.camera=s},initMouseHandler:function(){this.mouse=new u(this,Math.PI/4,Math.PI/4),this.mouse.attach(this.renderer.domElement)},initModel:function(){this.model=new h,this.scene.add(this.model.group),this.model.headOnly(!0)},initOptions:function(){var t=this
o.$$("input",this.options).forEach(function(e){o.on(e,"change",function(){t.change(e.name,e)})}),o.on(o.$("#reset"),"click",function(){o.$("[name=x]").value=o.$("[name=y]").value=45,t.mouse.setX(45),t.mouse.setY(45),t.justRender()})},fromUsername:function(t){var e=s(this)
e.src="https://mcapi.ca/skin/file/"+t},change:function(t,e){"head"==t?this.model.headOnly(e.checked):"outer"==t?this.model.includeHair(e.checked):"flat"==t?this.camera.toggle():"texture"==t?r(this,e.files[0]):"x"==t?this.mouse.setY(parseInt(e.value)):"y"==t?this.mouse.setX(parseInt(e.value)):"username"==t?this.fromUsername(e.value):"alex"==t&&this.model.setAlex(e.checked),this.justRender()},changed:function(t,e){o.$("[name=x]").value=e.toFixed(4),o.$("[name=y]").value=t.toFixed(4)},up:function(){this.output.src=this.renderer.domElement.toDataURL("image/png")},render:function(t,e){this.model.rotate(t,e),this.renderer.render(this.scene,this.camera.camera)},justRender:function(){this.render(this.mouse.result.x,this.mouse.result.y),this.up()}}},{"./camera":2,"./dom":3,"./model":5,"./mouse":6,"./utils":7}],2:[function(t,e,i){var s=e.exports=function(t,e,i,s,r,o,n){this.fov=i
var a=t/2,h=e/2
this.ortho=new THREE.OrthographicCamera((-a),a,h,(-h),o,n),this.ortho.position.z=4,this.perspec=new THREE.PerspectiveCamera(i,t/e,s,r),this.perspec.position.z=544,this.toOrtho()}
s.prototype={toOrtho:function(){this.camera=this.ortho},toPerspec:function(){this.camera=this.perspec},toggle:function(){this.camera==this.ortho?this.toPerspec():this.toOrtho()}}},{}],3:[function(t,e,i){function s(t){return Array.prototype.slice.call(t)}function r(t,e){return(e||document).querySelector(t)}function o(t,e){return s((e||document).querySelectorAll(t))}function n(t,e,i){t.addEventListener(e,i)}e.exports={$:r,$$:o,on:n}},{}],4:[function(t,e,i){e.exports={App:t("./app"),dom:t("./dom"),version:"0.1.0"}},{"./app":1,"./dom":3}],5:[function(t,e,i){var s=t("./utils"),r=e.exports=function(){this.createMesh(64,32),this.applyUV(64,32),this.alex=!1}
r.prototype={createMesh:function(t,e){var i=new THREE.MeshBasicMaterial,r=new THREE.MeshBasicMaterial({side:THREE.DoubleSide,transparent:!0}),o=this.alex?3:4,n=2+(this.alex?3.5:4)
console.log(o)
var a=s.limb(i,0,8,8,8,8),h=s.limb(r,0,8,8,8,8),u=s.limb(i,0,-2,8,12,4),l=s.limb(i,-n,-2,o,12,4),c=s.limb(i,n,-2,o,12,4),p=s.limb(i,-2,-14,4,12,4),d=s.limb(i,2,-14,4,12,4),m=new THREE.Object3D
if(m.position.set(0,32,0),m.scale.x=m.scale.y=m.scale.z=96,h.scale.x=h.scale.y=h.scale.z=1.1,m.add(a),m.add(h),m.add(u),m.add(l),m.add(c),m.add(p),m.add(d),64==e){var f=s.limb(r,0,-2,8,12,4),y=s.limb(r,-n,-2,o,12,4),g=s.limb(r,n,-2,o,12,4),_=s.limb(r,-2,-14,4,12,4),v=s.limb(r,2,-14,4,12,4)
m.add(f),m.add(y),m.add(g),m.add(_),m.add(v),[y,g,_,v].forEach(function(t){t.scale.set(1.1,.9,1.1)}),f.scale.set(1.1,1.1,1.1),this.outer_body=f,this.outer_left_arm=y,this.outer_right_arm=g,this.outer_left_leg=_,this.outer_right_leg=v}else this.outer_body=this.outer_left_arm=this.outer_right_arm=this.outer_left_leg=this.outer_right_leg=null
this.material=i,this.outerMaterial=r,this.head=a,this.outer=h,this.body=u,this.left_arm=l,this.left_leg=p,this.right_arm=c,this.right_leg=d,this.group=m},rotate:function(t,e){this.group.rotation.x=e,this.group.rotation.y=t},headOnly:function(t){this.head.position.y=this.outer.position.y=t?0:1,this.body.visible=!t,this.left_arm.visible=!t,this.right_arm.visible=!t,this.left_leg.visible=!t,this.right_leg.visible=!t,this.outer_body&&(this.outer_body.visible=!t,this.outer_left_arm.visible=!t,this.outer_right_arm.visible=!t,this.outer_left_leg.visible=!t,this.outer_right_leg.visible=!t)},includeHair:function(t){this.outer.visible=t},applyUV:function(t,e){if(64==e){var i=this.alex?3:4
s.apply_cube(t,e,this.head.geometry,0,48,8,8,8),s.apply_cube(t,e,this.body.geometry,16,32,8,12,4),s.apply_cube(t,e,this.right_arm.geometry,40,32,i,12,4),s.apply_cube(t,e,this.right_leg.geometry,0,32,4,12,4),s.apply_cube(t,e,this.left_arm.geometry,32,0,i,12,4),s.apply_cube(t,e,this.left_leg.geometry,16,0,4,12,4),s.apply_cube(t,e,this.outer.geometry,32,48,8,8,8),s.apply_cube(t,e,this.outer_body.geometry,16,16,4,12,4),s.apply_cube(t,e,this.outer_right_arm.geometry,40,16,i,12,4),s.apply_cube(t,e,this.outer_right_leg.geometry,0,16,4,12,4),s.apply_cube(t,e,this.outer_left_arm.geometry,48,0,i,12,4),s.apply_cube(t,e,this.outer_left_leg.geometry,0,0,4,12,4)}else s.apply_cube(t,e,this.head.geometry,0,16,8,8,8),s.apply_cube(t,e,this.outer.geometry,32,16,8,8,8),s.apply_cube(t,e,this.body.geometry,16,0,8,12,4),s.apply_cube(t,e,this.left_arm.geometry,40,0,4,12,4),s.apply_cube(t,e,this.right_arm.geometry,40,0,4,12,4,!0),s.apply_cube(t,e,this.left_leg.geometry,0,0,4,12,4),s.apply_cube(t,e,this.right_leg.geometry,0,0,4,12,4,!0)},setTexture:function(t){t.minFilter=t.magFilter=THREE.NearestFilter,this.material.map=t,this.material.map.needsUpdate=!0,this.outerMaterial.map=t,this.outerMaterial.map.needsUpdate=!0},setImage:function(t,e,i){var s=this.group.parent,r=!this.body.visible
s.remove(this.group),this.createMesh(e,i),this.applyUV(e,i),s.add(this.group),this.setTexture(new THREE.Texture(t)),this.headOnly(r)},setAlex:function(t){var e=this.material.map,i=e.image,s=i.width,r=i.height,o=this.group.parent,n=!this.body.visible
this.alex=t,o.remove(this.group),this.createMesh(s,r),this.applyUV(s,r),o.add(this.group),this.setTexture(e),this.headOnly(n)}}},{"./utils":7}],6:[function(t,e,i){var s=t("./dom"),r=t("./utils"),o=e.exports=function(t,e,i){this.target=t,this.on=!1,this.result=r.point(e,i),this.first=r.point(0,0),this.tmp=r.point(0,0),this.last=r.point(0,0)}
o.prototype={attach:function(t){s.on(t,"mousedown",this.down.bind(this)),s.on(t,"mousemove",this.move.bind(this)),s.on(t,"mouseout",this.out.bind(this)),s.on(t,"mouseup",this.up.bind(this))},out:function(){this.on=!1},down:function(t){this.on=!0,this.first.x=t.pageX,this.first.y=t.pageY,this.last.x=this.result.x,this.last.y=this.result.y},move:function(t){this.on&&(this.tmp.x=t.pageX-this.first.x,this.tmp.y=t.pageY-this.first.y,this.applyRotation(),this.render())},up:function(t){this.on=!1,this.applyRotation(),this.target.up()},applyRotation:function(){var t=2*Math.PI
this.result.x=(this.last.x+this.tmp.x/90)%t,this.result.y=(this.last.y+this.tmp.y/90)%t,this.target.changed(this.getX(),this.getY())},setX:function(t){this.result.x=t/180*Math.PI,this.render()},setY:function(t){this.result.y=t/180*Math.PI,this.render()},getX:function(){return 180*this.result.x/Math.PI},getY:function(){return 180*this.result.y/Math.PI},render:function(){this.target.render(this.result.x,this.result.y)}}},{"./dom":3,"./utils":7}],7:[function(t,e,i){function s(t,e){return{x:t,y:e}}function r(t,e,i,s){return new THREE.Vector2(t/i,e/s)}function o(t,e,i,s,o,n,a,h,u){s=2*s
var l=[r(o,n+h,t,e),r(o+a,n+h,t,e),r(o+a,n,t,e),r(o,n,t,e)]
6!=s?u?(i.faceVertexUvs[0][s]=[l[1],l[2],l[0]],i.faceVertexUvs[0][s+1]=[l[2],l[3],l[0]]):(i.faceVertexUvs[0][s]=[l[0],l[3],l[1]],i.faceVertexUvs[0][s+1]=[l[3],l[2],l[1]]):u?(i.faceVertexUvs[0][s]=[l[2],l[1],l[3]],i.faceVertexUvs[0][s+1]=[l[1],l[0],l[3]]):(i.faceVertexUvs[0][s]=[l[3],l[0],l[2]],i.faceVertexUvs[0][s+1]=[l[0],l[1],l[2]])}function n(t,e,i,s,r,n,a,h,u){o(t,e,i,4,s+h,r,n,a,u),o(t,e,i,5,s+h+n+h,r,n,a,u),u?(o(t,e,i,0,s,r,h,a,u),o(t,e,i,1,s+h+n,r,h,a,u)):(o(t,e,i,0,s+h+n,r,h,a),o(t,e,i,1,s,r,h,a)),o(t,e,i,2,s+h,r+a,n,h,u),o(t,e,i,3,s+h+n,r+a,n,h,u),i.uvsNeedUpdate=!0}function a(t,e,i,s,r,o){var n=new THREE.BoxGeometry(s/8,r/8,o/8),a=new THREE.Mesh(n,t)
return a.position.x=e?e/8:0,a.position.y=i?i/8:0,a}e.exports={point:s,vec:r,apply_uv:o,apply_cube:n,limb:a}},{}]},{},[4])(4)})
