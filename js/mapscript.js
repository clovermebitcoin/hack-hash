var _0x5c26=['atk1','Magic\x20Ruby\x20(Atk\x20Up)','dspeak','#8\x20p58/3p/10w','#9\x20p13/5p/14w','#10\x20p94-5p-1l-4l-24l-41l','hackmsg11','#11\x20p76/8p/7w','hackmsg13a','#13a\x20p76-1p-23l-22l-p110-3p-1l','hackmsg13b','Seek\x20Lost\x20Treasure','campaign','message','push','moved','indexOf','Found\x20','crypto','crypto_value','weapon','treasure_id','spellbook','max_hp','bonus_atk','current_id','map_id','status','length','encounter_chance','select_pos','timer','phase','victory_status','bone_piles','bone1','bone2','bone4','bone5','bone6','bone8','locked_doors','door1','serfmsg','Seek\x20the\x20hidden\x20treasure','stick','Bcash\x20Stick','heal','Spellbook:\x20Heal','#5\x20p116/6p/2w','hp1','Magic\x20Emerald\x20(HP\x20Up)','hackmsg6','#6\x20p100-4p-6l-7l-10l-16l','Crypto','Magic\x20Sapphire\x20(MP\x20Up)','def1','Magic\x20Diamond\x20(Def\x20Up)'];(function(_0x209e28,_0x2ee622){var _0x513d20=function(_0x1953d7){while(--_0x1953d7){_0x209e28['push'](_0x209e28['shift']());}};_0x513d20(++_0x2ee622);}(_0x5c26,0x17e));var _0x2b88=function(_0x139082,_0x19c3d5){_0x139082=_0x139082-0x0;var _0xbeda85=_0x5c26[_0x139082];return _0xbeda85;};var mapscript=new Object();mapscript[_0x2b88('0x0')]=new Array();mapscript[_0x2b88('0x0')]=[{'map_id':0x8,'x':0x4,'y':0x7,'status':_0x2b88('0x1')},{'map_id':0x8,'x':0x4,'y':0x2,'status':_0x2b88('0x2')},{'map_id':0x8,'x':0xd,'y':0x7,'status':'bone3'},{'map_id':0x8,'x':0xb,'y':0x5,'status':_0x2b88('0x3')},{'map_id':0x9,'x':0x5,'y':0x5,'status':_0x2b88('0x4')},{'map_id':0x9,'x':0x8,'y':0x2,'status':_0x2b88('0x5')},{'map_id':0xa,'x':0x2,'y':0x4,'status':'bone7'},{'map_id':0xa,'x':0x4,'y':0x2,'status':_0x2b88('0x6')}];mapscript[_0x2b88('0x7')]=new Array();mapscript[_0x2b88('0x7')]=[{'map_id':0x8,'x':0x4,'y':0xc,'status':_0x2b88('0x8')},{'map_id':0xa,'x':0xb,'y':0x3,'status':'door2'},{'map_id':0xa,'x':0xd,'y':0x3,'status':'door3'}];function mapscript_exec(_0x4fd659){var _0x333bc1=![];switch(_0x4fd659){case 0x0:_0x333bc1=mapscript_haybale(0x1,0x1);_0x333bc1=_0x333bc1||mapscript_message(0x1,0x2,_0x2b88('0x9'),_0x2b88('0xa'));return _0x333bc1;case 0x1:return![];case 0x2:return mapscript_chest(0x1,0x1,_0x2b88('0xb'),_0x2b88('0xc'),0x1);case 0x3:mapscript_chest(0x2,0x1,_0x2b88('0xd'),_0x2b88('0xe'),0x1);_0x333bc1=_0x333bc1||mapscript_message(0x1,0x3,'hackmsg',_0x2b88('0xf'));return _0x333bc1;case 0x4:mapscript_chest(0x2,0x2,_0x2b88('0x10'),_0x2b88('0x11'),0x1);_0x333bc1=_0x333bc1||mapscript_message(0xc,0x1,_0x2b88('0x12'),_0x2b88('0x13'));return _0x333bc1;case 0x5:return mapscript_chest(0x7,0xa,'g1',_0x2b88('0x14'),0xa);case 0x6:mapscript_chest(0x9,0x4,'mp1',_0x2b88('0x15'),0x1);_0x333bc1=_0x333bc1||mapscript_enemy(0xe,0xe,ENEMY_SHILL,'');return _0x333bc1;case 0x7:return mapscript_chest(0xd,0x5,_0x2b88('0x16'),_0x2b88('0x17'),0x1);case 0x8:mapscript_bone_pile_load(0x8);mapscript_locked_door_load(0x8);_0x333bc1=mapscript_haybale(0xb,0x9);_0x333bc1=_0x333bc1||mapscript_chest(0x3,0x2,_0x2b88('0x18'),_0x2b88('0x19'),0x1);_0x333bc1=_0x333bc1||mapscript_chest(0x3,0xc,'mp2',_0x2b88('0x15'),0x1);_0x333bc1=_0x333bc1||mapscript_chest(0x6,0x9,'g2',_0x2b88('0x14'),0x19);return _0x333bc1;case 0x9:mapscript_bone_pile_load(0x9);boss_alter_map();_0x333bc1=mapscript_enemy(0x4,0x9,ENEMY_SHILL,'');_0x333bc1=_0x333bc1||mapscript_enemy(0xb,0x5,ENEMY_STALE_BLOCK,_0x2b88('0x1a'));return _0x333bc1;case 0xa:mapscript_locked_door_load(0xa);mapscript_bone_pile_load(0xa);_0x333bc1=mapscript_chest(0xb,0x2,'hp2',_0x2b88('0x11'),0x1);_0x333bc1=_0x333bc1||mapscript_chest(0xd,0x2,'g3',_0x2b88('0x14'),0x64);_0x333bc1=_0x333bc1||mapscript_enemy(0xe,0x9,ENEMY_SHILL,'');_0x333bc1=_0x333bc1||mapscript_enemy(0x6,0x4,ENEMY_SHILL,'');_0x333bc1=_0x333bc1||mapscript_enemy(0xe,0x4,ENEMY_SHILL,'');return _0x333bc1;case 0xb:_0x333bc1=_0x333bc1||mapscript_message(0xb,0x1,'hackmsg8',_0x2b88('0x1b'));_0x333bc1=_0x333bc1||mapscript_message(0xa,0xe,'hackmsg9',_0x2b88('0x1c'));_0x333bc1=_0x333bc1||mapscript_message(0xe,0x8,'hackmsg10',_0x2b88('0x1d'));_0x333bc1=_0x333bc1||mapscript_message(0x1,0xc,_0x2b88('0x1e'),_0x2b88('0x1f'));_0x333bc1=_0x333bc1||mapscript_message(0xe,0x1,'hackmsg12','#12\x20p126/6p/15w');_0x333bc1=_0x333bc1||mapscript_message(0x6,0x11,_0x2b88('0x20'),_0x2b88('0x21'));_0x333bc1=_0x333bc1||mapscript_message(0xe,0x12,_0x2b88('0x22'),_0x2b88('0x23'));return _0x333bc1;}return![];}function mapscript_message(_0xbebef2,_0x7099ed,_0x6fbc43,_0x359cd0){if(avatar['x']==_0xbebef2&&avatar['y']==_0x7099ed){if(avatar[_0x2b88('0x24')]['indexOf'](_0x6fbc43)>-0x1){return![];}explore[_0x2b88('0x25')]=_0x359cd0;avatar[_0x2b88('0x24')][_0x2b88('0x26')](_0x6fbc43);return!![];}return![];}function mapscript_haybale(_0x571d75,_0x4335dc){if(!avatar[_0x2b88('0x27')])return![];if(avatar['x']==_0x571d75&&avatar['y']==_0x4335dc){explore['message']='You\x20rest\x20for\x20awhile.';avatar_sleep();sounds_play(SFX_COIN);return!![];}return![];}function mapscript_chest(_0x54dae3,_0x361494,_0x3952b4,_0x387c9c,_0x43d982){if(avatar[_0x2b88('0x24')][_0x2b88('0x28')](_0x3952b4)>-0x1){if(mazemap_get_tile(_0x54dae3,_0x361494)==0x8){mazemap_set_tile(_0x54dae3,_0x361494,0x5);}else if(mazemap_get_tile(_0x54dae3,_0x361494)==0x9){mazemap_set_tile(_0x54dae3,_0x361494,0x1);}}else{if(avatar['x']==_0x54dae3&&avatar['y']==_0x361494){avatar['campaign'][_0x2b88('0x26')](_0x3952b4);mapscript_grant_item(_0x387c9c,_0x43d982);return!![];}}return![];}function mapscript_grant_item(_0x423bfa,_0x4afda4){sounds_play(SFX_COIN);if(_0x4afda4==0x1){explore['message']=_0x2b88('0x29')+_0x423bfa+'!';}else if(_0x4afda4>0x1){explore[_0x2b88('0x25')]=_0x2b88('0x29')+_0x4afda4+'\x20'+_0x423bfa;}if(_0x423bfa==_0x2b88('0x14')){avatar[_0x2b88('0x2a')]+=_0x4afda4;explore[_0x2b88('0x2b')]=_0x4afda4;}else if(_0x423bfa==_0x2b88('0xc')){if(avatar['weapon']==0x0)avatar[_0x2b88('0x2c')]=0x1;explore[_0x2b88('0x2d')]=0xa;}else if(_0x423bfa=='Spellbook:\x20Heal'){if(avatar[_0x2b88('0x2e')]==0x0)avatar[_0x2b88('0x2e')]=0x1;explore[_0x2b88('0x2d')]=0xb;}else if(_0x423bfa=='Magic\x20Sapphire\x20(MP\x20Up)'){avatar['mp']+=0x2;avatar['max_mp']+=0x2;explore[_0x2b88('0x2d')]=0xc;}else if(_0x423bfa==_0x2b88('0x11')){avatar['hp']+=0x5;avatar[_0x2b88('0x2f')]+=0x5;explore[_0x2b88('0x2d')]=0xd;}else if(_0x423bfa==_0x2b88('0x19')){avatar[_0x2b88('0x30')]+=0x1;explore[_0x2b88('0x2d')]=0xe;}else if(_0x423bfa==_0x2b88('0x17')){avatar['bonus_def']+=0x1;explore[_0x2b88('0x2d')]=0xf;}}function mapscript_bone_pile_save(_0x27f5fc,_0x32d649){for(var _0x337f3d=0x0;_0x337f3d<mapscript[_0x2b88('0x0')]['length'];_0x337f3d++){if(mazemap[_0x2b88('0x31')]==mapscript['bone_piles'][_0x337f3d][_0x2b88('0x32')]&&_0x27f5fc==mapscript['bone_piles'][_0x337f3d]['x']&&_0x32d649==mapscript['bone_piles'][_0x337f3d]['y']){avatar[_0x2b88('0x24')]['push'](mapscript[_0x2b88('0x0')][_0x337f3d][_0x2b88('0x33')]);}}}function mapscript_bone_pile_load(_0x329ea8){for(var _0x1b1cf5=0x0;_0x1b1cf5<mapscript[_0x2b88('0x0')][_0x2b88('0x34')];_0x1b1cf5++){if(mapscript[_0x2b88('0x0')][_0x1b1cf5][_0x2b88('0x32')]==_0x329ea8){if(avatar[_0x2b88('0x24')][_0x2b88('0x28')](mapscript[_0x2b88('0x0')][_0x1b1cf5][_0x2b88('0x33')])>-0x1){mazemap_set_tile(mapscript['bone_piles'][_0x1b1cf5]['x'],mapscript['bone_piles'][_0x1b1cf5]['y'],0x5);}}}}function mapscript_locked_door_save(_0x50bcc0,_0x146bce){for(var _0xa3b8fc=0x0;_0xa3b8fc<mapscript[_0x2b88('0x7')][_0x2b88('0x34')];_0xa3b8fc++){if(mazemap[_0x2b88('0x31')]==mapscript[_0x2b88('0x7')][_0xa3b8fc][_0x2b88('0x32')]&&_0x50bcc0==mapscript[_0x2b88('0x7')][_0xa3b8fc]['x']&&_0x146bce==mapscript[_0x2b88('0x7')][_0xa3b8fc]['y']){avatar['campaign']['push'](mapscript[_0x2b88('0x7')][_0xa3b8fc][_0x2b88('0x33')]);}}}function mapscript_locked_door_load(_0x46581b){for(var _0x367bd3=0x0;_0x367bd3<mapscript[_0x2b88('0x7')][_0x2b88('0x34')];_0x367bd3++){if(mapscript['locked_doors'][_0x367bd3]['map_id']==_0x46581b){if(avatar[_0x2b88('0x24')][_0x2b88('0x28')](mapscript[_0x2b88('0x7')][_0x367bd3][_0x2b88('0x33')])>-0x1){mazemap_set_tile(mapscript[_0x2b88('0x7')][_0x367bd3]['x'],mapscript[_0x2b88('0x7')][_0x367bd3]['y'],0x3);}}}}function mapscript_enemy(_0x50b40f,_0x9c815f,_0x1ae1a6,_0x2c3104){if(!init_complete)return![];if(avatar['x']==_0x50b40f&&avatar['y']==_0x9c815f){if(_0x2c3104!=''){if(avatar['campaign'][_0x2b88('0x28')](_0x2c3104)>-0x1){return![];}}explore[_0x2b88('0x35')]=0x0;gamestate=STATE_COMBAT;action[_0x2b88('0x36')]=BUTTON_POS_ATTACK;combat[_0x2b88('0x37')]=COMBAT_INTRO_DELAY;combat[_0x2b88('0x38')]=COMBAT_PHASE_INTRO;combat_set_enemy(_0x1ae1a6);combat[_0x2b88('0x39')]=_0x2c3104;return!![];}return![];}