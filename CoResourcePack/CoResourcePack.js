mc.listen("onServerStarted",function(){
    log("资源包双端共存-CoResourcePack loaded by dofes");
    log("Contact me: dofes@litebds.com");
})

var ResourcePacksInfoPacket_write = NativeFunction.fromSymbol("?write@ResourcePacksInfoPacket@@UEBAXAEAVBinaryStream@@@Z");

var original = ResourcePacksInfoPacket_write.hook(function(a, b) {
    a.offset(48).bool = true;
    return original.call(a, b);
});
