(function () {
    angular.module('Aes', [])
        .controller('MainCtrl', MainCtrl)

    function MainCtrl() {
        var mCtrl = this;

        mCtrl.iv = "0000000000000000";
        mCtrl.key = "04c72343945e2a6ef09221862164ac3a9e914373";
        mCtrl.plaintext = "abcdefgh12345678";

        mCtrl.encryptText = encryptText;
        mCtrl.decryptText = decryptText;
        mCtrl.encryptTextAESJS = encryptTextAESJS;

        /////

        function encryptText() {
            var iv = CryptoJS.enc.Base64.parse(mCtrl.iv);
            var encrypted = CryptoJS.AES.encrypt(mCtrl.plaintext, mCtrl.key,{
                iv: iv,
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.ZeroPadding,
                keySize: 128
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

        function encryptTextAESJS() {
            console.log(CryptoJS.enc.Utf8.parse(mCtrl.key).toString(), CryptoJS.enc.Utf8.parse(mCtrl.iv).toString())

          var aesCbc = new aesjs.ModeOfOperation.cbc([], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        }
    }
})();