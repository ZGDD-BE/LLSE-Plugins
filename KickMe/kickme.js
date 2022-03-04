//LiteXLoader Dev Helper
/// <reference path="E:\Github-Repositories\LLSE-Plugins\Library\JS/Api.js" /> 

//Copyed from xiaoqch
class FakeParamType {
    static Bool = ParamType.Bool;           //bool
    static Int = ParamType.Int;             //int
    static Float = ParamType.Float;         //float
    static String = ParamType.String;       //std::string
    static Actor = ParamType.Actor;         //CommandSelector<Actor>
    static Player = ParamType.Player;       //CommandSelector<Player>
    static BlockPos = ParamType.BlockPos;   //CommandPosition
    static Vec3 = ParamType.Vec3;           //CommandPositionFloat
    static RawText = ParamType.RawText;     //CommandRawText
    static Message = ParamType.Message;     //CommandMessage
    static JsonValue = ParamType.JsonValue; //Json::Value
    static Item = ParamType.Item;           //CommandItem
    static Block = ParamType.Block;         //Block const*
    static Effect = ParamType.Effect;       //MobEffect const*
    static Enum = ParamType.Enum;           //ENUM
    static SoftEnum = ParamType.SoftEnum;   //SOFT_ENUM
    static ActorType = ParamType.ActorType; //ActorDefinitionIdentifier const*
    static Command = ParamType.Command;     //std::unique_ptr<Command>
}
class FakePermType {
    static Any = PermType.Any;
    static GameMasters = PermType.GameMasters;
    static Admin = PermType.Admin;
    static HostPlayer = PermType.HostPlayer;
    static Console = PermType.Console;
    static Internal = PermType.Internal;
};
class FakeOriginType {
    static Player = OriginType.Player;
    static Block = OriginType.Block;
    static MinecartBlock = OriginType.MinecartBlock;
    static DevConsole = OriginType.DevConsole;
    static Test = OriginType.Test;
    static AutomationPlayer = OriginType.AutomationPlayer;
    static ClientAutomation = OriginType.ClientAutomation;
    static Server = OriginType.Server;
    static Actor = OriginType.Actor;
    static Virtual = OriginType.Virtual;
    static GameArgument = OriginType.GameArgument;
    static ActorServer = OriginType.ActorServer;
    static Precompiled = OriginType.Precompiled;
    static GameDirectorEntity = OriginType.GameDirectorEntity;
    static Script = OriginType.Script;
    static ExecuteContext = OriginType.ExecuteContext;
    static DedicatedServer = OriginType.DedicatedServer;
};
ParamType = FakeParamType;
PermType = FakePermType;
OriginType = FakeOriginType;

mc.listen("onServerStarted", () => {
let cmd = mc.newCommand("kickme","§r§e踢掉自己",PermType.Any,0x80);
cmd.optional("message",ParamType.String);
cmd.overload("message");
cmd.overload();
cmd.setCallback(function (cmd,origin,output,results){
    let message = results["message"];
    if(origin.player != undefined){
        if(message != undefined){
            origin.player.kick(message);
        }
        else{
            origin.player.kick("已成功将您踢出游戏！");
        }
        output.success("执行成功！");
    }
    else{
        output.error("执行失败！ 执行者非玩家！");
    }
});
cmd.setup();
});
