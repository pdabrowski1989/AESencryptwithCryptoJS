(function () {
    angular.module('Aes', [])
        .controller('MainCtrl', MainCtrl)

    function MainCtrl() {
        var mCtrl = this;

        mCtrl.iv = "0000000000000000";
        mCtrl.key = "haslo123haslo123";
        mCtrl.plaintext = "abcdefghijklabcdefghijklabcdefghijklabcdefghijkl";

        mCtrl.encryptText = encryptText;
        mCtrl.decryptText = decryptText;

        /////

        function encryptText() {
            var iv = CryptoJS.enc.Utf8.parse(mCtrl.iv);
            var encrypted = CryptoJS.AES.encrypt(mCtrl.plaintext, mCtrl.key,{
                iv: iv,
                mode: CryptoJS.mode.CBC,
                keySize: 256
            });

            mCtrl.output = encrypted.toString()
        }

        function decryptText() {
            mCtrl.showDecrypted = true;

            var iv = CryptoJS.enc.Utf8.parse(mCtrl.iv);
            var decrypted = CryptoJS.AES.decrypt(mCtrl.output, mCtrl.key, {
                iv: iv,
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.ZeroPadding
            });

            mCtrl.decrypted = decrypted.toString(CryptoJS.enc.Utf8)
        }
    }
})();