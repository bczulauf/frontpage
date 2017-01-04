QUnit.test( "closest()", function(assert) {
    const arr = [5, 10, 25, 80, 100, 19];
    assert.equal(closest(12, arr), 10, "Finds closest value when given a low number");
    assert.equal(closest(300, arr), 100, "Finds closest value when given a high value");
    assert.equal(closest(-40, arr), 5, "Finds the closest value when given a negative value");
});