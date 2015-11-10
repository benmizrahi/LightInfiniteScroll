module Global.Directives {

    export class LightInfiniteScroll implements ng.IDirective {

        constructor(private DataProvider: KeshetAnan.Interfaces.IScrollService) {
        }

        restrict = 'A';
        link = (scope:ng.IScope, element, attrs) => {
            var threshold = 100;
            element.scroll(() => {
                var visibleHeight = element.height();
                if (this.DataProvider.NoMoreDetails)
                    return;
                var scrollableHeight = element.prop('scrollHeight');
                var hiddenContentHeight = scrollableHeight - visibleHeight;
                if (hiddenContentHeight - element.scrollTop() <= threshold) {
                    scope.$apply(scope.$parent['ScrollAction']);
                }
            });
        };

         static factory(dataServiceNamne) {
             var directive = (DataProvider: KeshetAnan.Interfaces.IScrollService) => new LightInfiniteScroll(DataProvider);
             directive.$inject = [dataServiceNamne];
            return directive;
        }
    }
}