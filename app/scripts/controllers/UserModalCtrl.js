(function() {
    function UserModalCtrl($uibModalInstance, $cookies) {
        this.setUser = function () {
            $cookies.put("blocChatCurrentUser", this.input);
            $uibModalInstance.close(this.input);
        };
    }

    angular
        .module('blocChat')
        .controller('UserModalCtrl', ['$uibModalInstance', '$cookies', UserModalCtrl]);
})();
