var assert = require('assert');
var ldap = require('ldapjs');


var ldap_cn  = '';  // <-- Your assigned name goes here.
var password = '';   // <-- Your password goes here.

var ldap_url = 'ldaps://ldap.hawaii.edu:636';
var username = 'cn=' + ldap_cn + ',ou=Specials,dc=hawaii,dc=edu';

var client = ldap.createClient({
  url: ldap_url,
  tlsOptions: {
      rejectUnauthorized: true
    }
});

var uid = process.argv[2]; // Assumes uid passed in.

var opts = {
  filter: '(uid=' + uid + ')',
  scope: 'sub',
  attributes: ['cn', 'uid', 'mail']
};

client.bind(username, password, function (err) {
    assert.ifError(err);
});

client.search('dc=hawaii,dc=edu', opts, function (err, res) {
    res.on('searchEntry', function (entry) {
        console.log(entry.object);
    });
    res.on('error', function(err) {
        console.error('error: ' + err.message);
    });
    res.on('end', function(result) {
        if (result.status != 0) {
            console.log('status: ' + result.status);
        }
    });
});

client.unbind(function (err) {
    assert.ifError(err);
});
