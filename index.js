var LDAP = require('ldap-client');

var ldap = new LDAP({
    uri: 'ldap://localhost:10389',   // string
    validatecert: false,             // Verify server certificate
    connecttimeout: -1,                // seconds, default is -1 (infinite timeout), connect timeout
    base: 'dc=example,dc=com',          // default base for all future searches
    attrs: '*',               // default attribute list for future searches
    filter: '(objectClass=*)', // default filter for all future searches
    scope: LDAP.SUBTREE,      // default scope for all future searches
    connect: function () {
    },
    disconnect: function () {
    }
}, function (err) {
    console.log("connected");

    ldap.bind({
        binddn: 'uid=admin,ou=system',
        password: 'secret'
    }, function (err, data) {

        if (err) {
            console.log('bind err');
            console.log(err);
            return;
        }
        // now we're authenticated as admin on the main connection
        // and thus have the correct permissions for search

        // ldap.search({
        //     base: 'dc=example,dc=com',
        //     scope: LDAP.SUBTREE,
        //     filter: '(objectClass=inetOrgPerson)',
        //     attrs: '*'
        // }, function (err, data) {
        //     if (err) {
        //         console.log('search err');
        //         console.log(err);
        //         return;
        //     }
        //
        //     console.log(data);
        // });

        ldap.findandbind({
            base: 'dc=example,dc=com',
            filter: '(cn=Test User)',
            attrs: '*',
            password: 'test',
        }, function (err, data) {
            if (err) {
                console.log('auth error');
                console.log(err);
                return;
            }

            console.log('authenticated');
            console.log(data);
        });

    });
});