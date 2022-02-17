var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["848314f8-d7dc-4755-a4a1-3782173096b1","26b80e63-bc0f-408d-b288-be2282aebd4e","dfc53be7-786c-4305-b8eb-81fa595e9903","47fade86-5bd1-4789-87af-896fb1433a7b","043deebf-64b8-4795-be8d-db5055414f2f","3221caad-ae37-4eec-92a8-56bae4769e66","c4e310e0-8174-4127-a46e-0cbcc94b488b","8454b949-f49e-49fe-91eb-2416657323f4","c5a767d8-424f-46f5-bf58-f68c96a8489d","6b8618df-22b0-45ab-8dee-fefe01a4dcb7","c013397b-bd85-411c-a723-292b3099801e","273006fa-4737-46f2-9318-70e1feeb2dd1","13bfd5e1-9ad6-4cc1-a002-e74d5401ea05","f0e8658e-23bd-45ba-848b-3a67874ea46f","86525557-3e32-46a8-9cc2-9258e745dbb2","73f30956-beeb-4e5e-ae11-feefdb7a0a8a","1fbffab9-ce96-4bcc-ad1d-26c9100eb5c8","1a9d0800-c7f8-4276-8ef7-a83f01fba116","86be6006-57ec-44df-a85e-dc328e4c7ee2","fd914ab6-9f2b-46ea-8ec5-f23242e80426","cdc56469-fbd4-4e19-90f0-19f74c1f9446","d7bd3074-df10-44d9-9804-3013a0cd0e04","042f08b0-47ff-4dfc-a0f6-bdc5d9fa9b48"],"propsByKey":{"848314f8-d7dc-4755-a4a1-3782173096b1":{"name":"hero","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"fAgQ65k0wjOpXj90XR4eOc0kggE0qADM","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":30},"rootRelativePath":"assets/848314f8-d7dc-4755-a4a1-3782173096b1.png"},"26b80e63-bc0f-408d-b288-be2282aebd4e":{"name":"enemy1","sourceUrl":null,"frameSize":{"x":35,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"zuiZQGf7RKRWT2OiAEuQiON4vG2F_hx5","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":35,"y":50},"rootRelativePath":"assets/26b80e63-bc0f-408d-b288-be2282aebd4e.png"},"dfc53be7-786c-4305-b8eb-81fa595e9903":{"name":"enemy","sourceUrl":"assets/api/v1/animation-library/gamelab/xasculQGiYxBV79ltD_0E79ZRIexdPdZ/category_food/american_hamburger.png","frameSize":{"x":320,"y":254},"frameCount":1,"looping":true,"frameDelay":2,"version":"xasculQGiYxBV79ltD_0E79ZRIexdPdZ","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":320,"y":254},"rootRelativePath":"assets/api/v1/animation-library/gamelab/xasculQGiYxBV79ltD_0E79ZRIexdPdZ/category_food/american_hamburger.png"},"47fade86-5bd1-4789-87af-896fb1433a7b":{"name":"enemy2","sourceUrl":"assets/api/v1/animation-library/gamelab/dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG/category_food/american_pastrami.png","frameSize":{"x":355,"y":241},"frameCount":1,"looping":true,"frameDelay":2,"version":"dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":355,"y":241},"rootRelativePath":"assets/api/v1/animation-library/gamelab/dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG/category_food/american_pastrami.png"},"043deebf-64b8-4795-be8d-db5055414f2f":{"name":"enemy3","sourceUrl":"assets/api/v1/animation-library/gamelab/YSis4_lex43su6FLaL__bhoag4eHAl8D/category_food/american_bbqribs.png","frameSize":{"x":388,"y":388},"frameCount":1,"looping":true,"frameDelay":2,"version":"YSis4_lex43su6FLaL__bhoag4eHAl8D","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":388,"y":388},"rootRelativePath":"assets/api/v1/animation-library/gamelab/YSis4_lex43su6FLaL__bhoag4eHAl8D/category_food/american_bbqribs.png"},"3221caad-ae37-4eec-92a8-56bae4769e66":{"name":"b","sourceUrl":"assets/api/v1/animation-library/gamelab/IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT/category_backgrounds/kitchen.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT/category_backgrounds/kitchen.png"},"c4e310e0-8174-4127-a46e-0cbcc94b488b":{"name":"dream","sourceUrl":null,"frameSize":{"x":386,"y":268},"frameCount":1,"looping":true,"frameDelay":12,"version":"YznIo8ZNui4nFw6Rf0DYi.0sVFMLtAa7","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":386,"y":268},"rootRelativePath":"assets/c4e310e0-8174-4127-a46e-0cbcc94b488b.png"},"8454b949-f49e-49fe-91eb-2416657323f4":{"name":"huevo","sourceUrl":null,"frameSize":{"x":170,"y":240},"frameCount":1,"looping":true,"frameDelay":12,"version":"WbhTZO4jZf2G.fR_qLKX2yJXJ.Svy0oP","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":170,"y":240},"rootRelativePath":"assets/8454b949-f49e-49fe-91eb-2416657323f4.png"},"c5a767d8-424f-46f5-bf58-f68c96a8489d":{"name":"cuchillo1","sourceUrl":"assets/v3/animations/dxgvwc10u3L-iwadUm--g5IxpQgAJIaD5qJtjqcNJLw/c5a767d8-424f-46f5-bf58-f68c96a8489d.png","frameSize":{"x":512,"y":512},"frameCount":1,"looping":true,"frameDelay":4,"version":"M_ZrkfPa3is1pmmPnZvFbhekJRnTc6Kr","loadedFromSource":true,"saved":true,"sourceSize":{"x":512,"y":512},"rootRelativePath":"assets/v3/animations/dxgvwc10u3L-iwadUm--g5IxpQgAJIaD5qJtjqcNJLw/c5a767d8-424f-46f5-bf58-f68c96a8489d.png"},"6b8618df-22b0-45ab-8dee-fefe01a4dcb7":{"name":"cuchillo2","sourceUrl":null,"frameSize":{"x":512,"y":512},"frameCount":1,"looping":true,"frameDelay":12,"version":"l6Rf85oMqPTxe39biuI_pu.o_MASyqCL","loadedFromSource":true,"saved":true,"sourceSize":{"x":512,"y":512},"rootRelativePath":"assets/6b8618df-22b0-45ab-8dee-fefe01a4dcb7.png"},"c013397b-bd85-411c-a723-292b3099801e":{"name":"cuchillo3","sourceUrl":"assets/v3/animations/dxgvwc10u3L-iwadUm--g5IxpQgAJIaD5qJtjqcNJLw/c013397b-bd85-411c-a723-292b3099801e.png","frameSize":{"x":512,"y":512},"frameCount":1,"looping":true,"frameDelay":4,"version":"fIK6psHe_6nDozIuuRsGgH7PS1BmM.Xs","loadedFromSource":true,"saved":true,"sourceSize":{"x":512,"y":512},"rootRelativePath":"assets/v3/animations/dxgvwc10u3L-iwadUm--g5IxpQgAJIaD5qJtjqcNJLw/c013397b-bd85-411c-a723-292b3099801e.png"},"273006fa-4737-46f2-9318-70e1feeb2dd1":{"name":"farm_land_1","sourceUrl":"assets/api/v1/animation-library/gamelab/B7nUqE7MHvtM.bH.nFWaMiZcfScwjIfx/category_backgrounds/farm_land.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"B7nUqE7MHvtM.bH.nFWaMiZcfScwjIfx","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/B7nUqE7MHvtM.bH.nFWaMiZcfScwjIfx/category_backgrounds/farm_land.png"},"13bfd5e1-9ad6-4cc1-a002-e74d5401ea05":{"name":"shell_09_1","sourceUrl":"assets/api/v1/animation-library/gamelab/OjjM31PBygHtZqJBGfSDPp.sJLiYT8AB/category_aquatic_objects/shell_09.png","frameSize":{"x":400,"y":250},"frameCount":1,"looping":true,"frameDelay":2,"version":"OjjM31PBygHtZqJBGfSDPp.sJLiYT8AB","categories":["aquatic_objects"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":250},"rootRelativePath":"assets/api/v1/animation-library/gamelab/OjjM31PBygHtZqJBGfSDPp.sJLiYT8AB/category_aquatic_objects/shell_09.png"},"f0e8658e-23bd-45ba-848b-3a67874ea46f":{"name":"axe_iron_1","sourceUrl":"assets/api/v1/animation-library/gamelab/lwswqR_k2ZuI0Z.hjkd_s17PXirGHDJ4/category_tools/axe_iron.png","frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":2,"version":"lwswqR_k2ZuI0Z.hjkd_s17PXirGHDJ4","categories":["tools"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/api/v1/animation-library/gamelab/lwswqR_k2ZuI0Z.hjkd_s17PXirGHDJ4/category_tools/axe_iron.png"},"86525557-3e32-46a8-9cc2-9258e745dbb2":{"name":"alienYellow_jump_1","sourceUrl":"assets/api/v1/animation-library/gamelab/ES0ALMSUFggji96uogTDn6yq.OPZ_pVQ/category_fantasy/alienYellow_jump.png","frameSize":{"x":67,"y":83},"frameCount":1,"looping":true,"frameDelay":2,"version":"ES0ALMSUFggji96uogTDn6yq.OPZ_pVQ","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":67,"y":83},"rootRelativePath":"assets/api/v1/animation-library/gamelab/ES0ALMSUFggji96uogTDn6yq.OPZ_pVQ/category_fantasy/alienYellow_jump.png"},"73f30956-beeb-4e5e-ae11-feefdb7a0a8a":{"name":"alienPink_jump_1","sourceUrl":"assets/api/v1/animation-library/gamelab/nB78r8U_PAmduNeUoO_d3kbqpIf5Bp54/category_fantasy/alienPink_jump.png","frameSize":{"x":67,"y":93},"frameCount":1,"looping":true,"frameDelay":2,"version":"nB78r8U_PAmduNeUoO_d3kbqpIf5Bp54","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":67,"y":93},"rootRelativePath":"assets/api/v1/animation-library/gamelab/nB78r8U_PAmduNeUoO_d3kbqpIf5Bp54/category_fantasy/alienPink_jump.png"},"1fbffab9-ce96-4bcc-ad1d-26c9100eb5c8":{"name":"alienBlue_jump_1","sourceUrl":"assets/api/v1/animation-library/gamelab/3cQxzZa4AZvq.fcLGjAA1KF1n1fuyfNK/category_fantasy/alienBlue_jump.png","frameSize":{"x":66,"y":93},"frameCount":1,"looping":true,"frameDelay":2,"version":"3cQxzZa4AZvq.fcLGjAA1KF1n1fuyfNK","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":66,"y":93},"rootRelativePath":"assets/api/v1/animation-library/gamelab/3cQxzZa4AZvq.fcLGjAA1KF1n1fuyfNK/category_fantasy/alienBlue_jump.png"},"1a9d0800-c7f8-4276-8ef7-a83f01fba116":{"name":"bg_landscape10_1","sourceUrl":"assets/api/v1/animation-library/gamelab/bd70yXmt3QhSWOcEF8grNZiWfnsKW4d8/category_backgrounds/bg_landscape10.png","frameSize":{"x":400,"y":385},"frameCount":1,"looping":true,"frameDelay":2,"version":"bd70yXmt3QhSWOcEF8grNZiWfnsKW4d8","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":385},"rootRelativePath":"assets/api/v1/animation-library/gamelab/bd70yXmt3QhSWOcEF8grNZiWfnsKW4d8/category_backgrounds/bg_landscape10.png"},"86be6006-57ec-44df-a85e-dc328e4c7ee2":{"name":"lionfish_1","sourceUrl":"assets/api/v1/animation-library/gamelab/A8k5Fe.5l9Trcr_QZ7W8C8Y5kLPcpjfc/category_animals/lionfish.png","frameSize":{"x":398,"y":378},"frameCount":1,"looping":true,"frameDelay":2,"version":"A8k5Fe.5l9Trcr_QZ7W8C8Y5kLPcpjfc","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":398,"y":378},"rootRelativePath":"assets/api/v1/animation-library/gamelab/A8k5Fe.5l9Trcr_QZ7W8C8Y5kLPcpjfc/category_animals/lionfish.png"},"fd914ab6-9f2b-46ea-8ec5-f23242e80426":{"name":"shark_1","sourceUrl":"assets/api/v1/animation-library/gamelab/h5iaduJc2clM0M6koq2mdRkgWrUCcW5Y/category_animals/shark.png","frameSize":{"x":397,"y":185},"frameCount":1,"looping":true,"frameDelay":2,"version":"h5iaduJc2clM0M6koq2mdRkgWrUCcW5Y","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":397,"y":185},"rootRelativePath":"assets/api/v1/animation-library/gamelab/h5iaduJc2clM0M6koq2mdRkgWrUCcW5Y/category_animals/shark.png"},"cdc56469-fbd4-4e19-90f0-19f74c1f9446":{"name":"squid_1","sourceUrl":"assets/api/v1/animation-library/gamelab/3n699gWDSU45L4y13GuT6G_dwtbZQbhr/category_animals/squid.png","frameSize":{"x":398,"y":354},"frameCount":1,"looping":true,"frameDelay":2,"version":"3n699gWDSU45L4y13GuT6G_dwtbZQbhr","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":398,"y":354},"rootRelativePath":"assets/api/v1/animation-library/gamelab/3n699gWDSU45L4y13GuT6G_dwtbZQbhr/category_animals/squid.png"},"d7bd3074-df10-44d9-9804-3013a0cd0e04":{"name":"ship08_1","sourceUrl":"assets/api/v1/animation-library/gamelab/qCW7Tixx88sOCasiy96wH5apD47R5g5e/category_vehicles/ship08.png","frameSize":{"x":400,"y":360},"frameCount":1,"looping":true,"frameDelay":2,"version":"qCW7Tixx88sOCasiy96wH5apD47R5g5e","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":360},"rootRelativePath":"assets/api/v1/animation-library/gamelab/qCW7Tixx88sOCasiy96wH5apD47R5g5e/category_vehicles/ship08.png"},"042f08b0-47ff-4dfc-a0f6-bdc5d9fa9b48":{"name":"playerShip3_green_1","sourceUrl":"assets/api/v1/animation-library/gamelab/LSAxFAITzH2xiX41pmUjjKZ0mjsPflUA/category_vehicles/playerShip3_green.png","frameSize":{"x":98,"y":75},"frameCount":1,"looping":true,"frameDelay":2,"version":"LSAxFAITzH2xiX41pmUjjKZ0mjsPflUA","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":98,"y":75},"rootRelativePath":"assets/api/v1/animation-library/gamelab/LSAxFAITzH2xiX41pmUjjKZ0mjsPflUA/category_vehicles/playerShip3_green.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var b=createSprite(200,170);

var nave = createSprite(200,335);
nave.shapeColor="red";


var enemigo1 = createSprite(200,250,10,10);
enemigo1.shapeColor="red";

var enemigo2 = createSprite(200,150,10,10);
enemigo2.shapeColor="red";

var enemigo3 = createSprite(200,50,10,10);
enemigo3.shapeColor="red";

var net = createSprite(200,5,200,20);
net.shapeColor="red";



var goles =0;
var vidas = 5;

var gameState = "serve";

b.setAnimation("bg_landscape10_1");
nave.setAnimation("playerShip3_green_1");
nave.scale=0.6;
enemigo1.setAnimation("lionfish_1");
enemigo1.scale=0.1;
enemigo2.setAnimation("shark_1");
enemigo2.scale=0.1;
enemigo3.setAnimation("squid_1");
enemigo3.scale=0.1;



function draw() {
  
//fondo(b);

background("white");

   if(gameState=="serve")
  {
/*      textSize(20);
      fill ("maroon");
      text("Ayuda a la nave a salir a la superficie",80,180);*/

      textSize(20);
      fill ("green");
      text("¡Presiona espacio para iniciar!",70,385);
          
      if (keyDown("space")) {
        serve();
         gameState="play";
      }    
    
  }
  
   if(gameState=="play")
  {
      movimiento();
       
      textSize(20);
      fill("blue");
      text("Goles:"+goles,320,390);
  
      textSize(20);
      fill("red");
      text("Vidas:"+vidas,20,390);    
      if (keyDown("space")) {
        serve();
      }
      if(nave.isTouching(enemigo1)|| nave.isTouching(enemigo2)|| nave.isTouching(enemigo3)){
        playSound("assets/category_movement/puzzle_game_ui_powerup_01.mp3");
        original();
        vidas = vidas-1;
      }
      if(nave.isTouching(net)){
       playSound("assets/category_points/vibrant_affirm_or_open.mp3");
       original();
       goles=goles+1;
      }
      if (vidas==0) 
      { 
        playSound("assets/category_points/negative_point_counter_2.mp3");
        gameState="end";
      }
      if (goles==5) 
      { 
        playSound("assets/category_achievements/peaceful_win_8.mp3");
        gameState="end";
      }
      
      
  }

  if(gameState=="end")
  {
      original();
      fill("green");
      textSize(22);
      //agregar el texto de fin del juego
      text("¡Fin del juego!",130,385);
  } 

createEdgeSprites();

nave.bounceOff(edges);
enemigo1.bounceOff(edges);
enemigo2.bounceOff(edges);
enemigo3.bounceOff(edges);




  
drawSprites();
}

function serve(){
    enemigo1.setVelocity(-10,0);
    enemigo2.setVelocity(10,0);
    enemigo3.setVelocity(-10,0);
}

function movimiento(){
      if(keyDown(UP_ARROW)){
    nave.y=nave.y-3;
  }

    if(keyDown(DOWN_ARROW)){
    nave.y=nave.y+3;
  }

    if(keyDown(LEFT_ARROW)){
    nave.x=nave.x-3;
  }

    if(keyDown(RIGHT_ARROW)){
    nave.x=nave.x+3;
  }
}
 
function original (){
    nave.x=200;
    nave.y=335;
    enemigo1.velocityX=0;
    enemigo2.velocityX=0;
    enemigo3.velocityX=0;
    enemigo1.x=200;
    enemigo1.y=250;
    enemigo2.x=200;
    enemigo2.y=150
    enemigo3.x=200;
    enemigo3.y=50;
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
