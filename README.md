uh-nodejs-ldapjs
===========

LDAP Node.js Demonstration Program

**Overview**

The program demonstrates how to do a simple LDAP search
of the University of Hawaii LDAP service.

You must specify your Special DN and its password.
The example run of the program used a specified special DN,
but the account values have been removed from the checked-in code.

The use of the special DN will also require
the ability to pass through the UH firewall.

**Technology**

The program was developed on Apple Mac OS X 10.10.4,
using node version 0.10.37, npm version 1.4.28,
and the ldapjs framework version 0.7.1.

**Verify you have node installed**

    $ node --version
    v0.10.37


**Verify you have the npm package manager installed**

    $ npm --version
    1.4.28

**Install the LDAP module**

    $ sudo npm install ldapjs
    ...
    ldapjs@0.7.1 ../node_modules/ldapjs
    |--assert-plus@0.1.5
    |-- asn1@0.2.1
    |-- nopt@2.1.1 (abbrev@1.0.7)
    |-- bunyan@0.22.1 (mv@0.0.5)
    |-- pooling@0.4.6 (once@1.3.0, vasync@1.4.0)
    +-- dtrace-provider@0.2.8

**Running the Program**

Run the program from the command line:

    $ ./ldaprunner duckart
    vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
    { dn: 'uhEntry=16d4fd0bffd6c91a4e8af1b6642c2cea7dddcc707,ou=People,dc=hawaii,dc=edu',
      controls: [],
      cn: 'Frank R Duckart',
      uid: 'duckart',
      mail: [ 'duckart@hawaii.edu', 'frank.duckart@hawaii.edu' ] }
    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

You can run the program with mutltiple UH usernames: </br>

    $ ./ldaprunner duckart duckart
    vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
    { dn: 'uhEntry=16d4fd0bffd6c91a4e8af1b6642c2cea7dddcc707,ou=People,dc=hawaii,dc=edu',
      controls: [],
      cn: 'Frank R Duckart',
      uid: 'duckart',
      mail: [ 'duckart@hawaii.edu', 'frank.duckart@hawaii.edu' ] }
        ................................
    { dn: 'uhEntry=16d4fd0bffd6c91a4e8af1b6642c2cea7dddcc707,ou=People,dc=hawaii,dc=edu',
      controls: [],
      cn: 'Frank R Duckart',
      uid: 'duckart',
      mail: [ 'duckart@hawaii.edu', 'frank.duckart@hawaii.edu' ] }
    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

**For More Information**

Contact me via email at duckart@hawaii.edu

