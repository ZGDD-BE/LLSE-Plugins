/**
 * 🧰 物品对象 API
在LXL中，使用「物品对象」来操作和获取某一个物品栏物品的相关信息
 */ 
class Item {
  
/**
 * 游戏内显示的物品名称
 * @type String
 */ 
 name;
/**
 * 物品标准类型名
 * @type String
 */ 
 type;
/**
 * 物品的游戏内id
 * @type Integer
 */ 
 id;
/**
 * 这个物品对象堆叠的个数
 * @type Integer
 */ 
 count;
/**
 * 物品附加值（如羊毛颜色）
 * @type String
 */ 
 aux;
  
  


/**
 * 通过 现有的物品对象 生成一个新的物品对象
 * @returns {Item} 生成的新物品对象
 */
 clone()

/**
 * 判断物品对象是否为空
 * @returns {boolean} 这个物品对象是否为空
 */
 isnull()

/**
 * 将此物品对象置为空（删除物品）
 * @returns {boolean} 是否删除成功
 */
 setnull()

/**
 * 将此物品对象设置为另一个物品
 * @param {Item} item 要赋值的物品对象
 * @returns {boolean} 是否赋值成功
 */
 set(item)

/**
 * 根据物品对象，在指定的位置生成一个同样内容的掉落物实体
 * @param {Item} item 生成掉落物实体所使用的物品对象
 * @param {FloatPos} pos 生成掉落物实体的位置的坐标对象（或者使用x, y, z, dimid来确定生成位置）
 * @returns {Entity} 生成的掉落物实体对象
如返回值为 null 则表示生成失败
 */
 spawnItem(item,pos)

/**
 * 获取物品对应的NBT对象

 * @returns {NbtCompound} 物品的NBT对象
 */
 getNbt()

/**
 * 写入物品对应的NBT对象
 * @param {NbtCompound} nbt 
 * @returns {boolean} 是否成功写入
 */
 setNbt(nbt)

/**
 * 
 * @param {string[]} lore 
 * @returns {} 
 */
 setLore(lore)

/**
 * 根据物品对象，在指定的位置生成一个同样内容的掉落物实体
 * @param {Item} item 生成掉落物实体所使用的物品对象
 * @param {IntPos} pos 生成掉落物实体的位置的坐标对象（或者使用x, y, z, dimid来确定生成位置）
 * @returns {Entity} 生成的掉落物实体对象
如返回值为 null 则表示生成失败
 */
 spawnItem(item,pos)  



}
