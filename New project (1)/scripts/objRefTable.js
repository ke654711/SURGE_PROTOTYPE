const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Behaviors.solid,
		C3.Plugins.Text,
		C3.Plugins.Keyboard,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Behaviors.Platform.Acts.SetDoubleJumpEnabled,
		C3.Behaviors.Platform.Acts.SetVectorY,
		C3.Plugins.System.Acts.Wait
	];
};
self.C3_JsPropNameTable = [
	{Platform: 0},
	{Player: 0},
	{Solid: 0},
	{Invisible_Barrier: 0},
	{Base: 0},
	{Container: 0},
	{Stage1: 0},
	{Checkpoint: 0},
	{Stage2: 0},
	{Container2: 0},
	{Pasty: 0},
	{Base2: 0},
	{Fan: 0},
	{Keyboard: 0},
	{Sprite: 0}
];

self.InstanceType = {
	Player: class extends self.ISpriteInstance {},
	Invisible_Barrier: class extends self.ISpriteInstance {},
	Base: class extends self.ISpriteInstance {},
	Container: class extends self.ISpriteInstance {},
	Stage1: class extends self.ITextInstance {},
	Checkpoint: class extends self.ISpriteInstance {},
	Stage2: class extends self.ITextInstance {},
	Container2: class extends self.ISpriteInstance {},
	Pasty: class extends self.ISpriteInstance {},
	Base2: class extends self.ISpriteInstance {},
	Fan: class extends self.ISpriteInstance {},
	Keyboard: class extends self.IInstance {},
	Sprite: class extends self.ISpriteInstance {}
}