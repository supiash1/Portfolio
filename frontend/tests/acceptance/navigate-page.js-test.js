import { test } from 'qunit';
import moduleForAcceptance from 'bostonember/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | navigate page.js');


test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});


test('should link to home page .', function (assert) {
  visit('/');
  click('a:contains("Home")');
  andThen(function () {
    assert.equal(currentURL(), '/', 'should navigate to index');
  });
});

test('should link to about information', function (assert) {
  visit('/');
  click('a:contains("About")');
  andThen(function () {
    assert.equal(currentURL(), '/about', 'should navigate to about');
  });
});