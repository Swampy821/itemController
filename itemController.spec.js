var item = new itemController({
	name: "Item Name",
	description: "Item Description",
	type: "Gem",
	str:1,
	ac:1,
	dex:1,
	end:1,
	attack:1,
	dur:1
});

QUnit.test("Creating an Item.",function(assert) {

  assert.equal(item.data.name, "Item Name", "Expect item name to be \"Item Name\".");

  assert.equal(item.data.description, "Item Description", "Expect item description to be \"Item Description\".");

  assert.equal(item.data.type, "Gem", "Expect item type to be \"Gem\"");

  assert.equal(item.data.str, 1, "Expect item str to be 1.");

  assert.equal(item.data.ac, 1, "Expect item ac to be 1.");

  assert.equal(item.data.dex, 1, "Expect item dex to be 1.");

  assert.equal(item.data.end, 1, "Expect item end to be 1.");

  assert.equal(item.data.attack, 1, "Expect item attack to be 1.");

  assert.equal(item.data.dur, 1, "Expect item dur to be 1.");
});
