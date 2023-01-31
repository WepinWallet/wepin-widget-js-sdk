var overlay = /** @class */ (function () {
    function overlay() {
    }
    overlay.closeOverlay = function (id, useOverlay) {
        if (useOverlay) {
            var overlay_1 = document.querySelector("#".concat(id));
            if (overlay_1 && overlay_1.parentNode) {
                overlay_1.parentNode.removeChild(overlay_1);
            }
        }
    };
    overlay.openOverlay = function (id, useOverlay, focus, close) {
        if (useOverlay) {
            //remove existing overlay divs
            var overlayDiv = document.createElement('div');
            overlayDiv.id = id;
            overlayDiv.classList.add(overlay.CONST.overlayClassName);
            overlayDiv.style.zIndex = '2147483647';
            overlayDiv.style.display = 'flex';
            overlayDiv.style.alignItems = 'center';
            overlayDiv.style.justifyContent = 'center';
            overlayDiv.style.textAlign = 'center';
            overlayDiv.style.position = 'fixed';
            overlayDiv.style.left = '0px';
            overlayDiv.style.right = '0px';
            overlayDiv.style.top = '0px';
            overlayDiv.style.bottom = '0px';
            overlayDiv.style.background = 'rgba(0,0,0,0.80)';
            overlayDiv.style.color = 'white';
            overlayDiv.style.border = '2px solid #f1f1f1';
            // overlayDiv.innerHTML = `<div style="max-width: 350px;">` +
            //     `<div style="margin-bottom: 1rem">${Widget.CONST.overlayMessage}</div>` +
            //     `<div><a style="${Widget.CONST.overlayLinkStyle}" href="javascript:void(0)" class="${Widget.CONST.overlayLinkClassName}">${Widget.CONST.overlayLinkMessage}</a></div>` +
            //     `<a style="${Widget.CONST.overlayLinkStyle} position: absolute; right: 1rem; top: 1rem;" href="javascript:void(0)" class="${Widget.CONST.overlayCloseLinkClassName}">X</a>` +
            //     `</div>`;
            var existingOverlays = document.getElementsByClassName(overlay.CONST.overlayClassName);
            for (var i = 0; i < existingOverlays.length; i++) {
                var existingOverlay = existingOverlays.item(i);
                if (existingOverlay) {
                    existingOverlay.remove();
                }
            }
            document.body.appendChild(overlayDiv);
            // const link = overlayDiv.querySelector(`#${id} .${Widget.CONST.overlayLinkClassName}`);
            // const closeLink = overlayDiv.querySelector(`#${id} .${Widget.CONST.overlayCloseLinkClassName}`);
            // if (link) {
            //     link.addEventListener('click', () => {
            //         focus();
            //     });
            // }
            // if (closeLink) {
            //     closeLink.addEventListener('click', () => {
            //         close();
            //     })
            // }
        }
    };
    overlay.CONST = {
        overlayClassName: 'wepin-widget__overlay',
        // overlayLinkClassName: 'wepin-widget__reopen-link',
        // overlayCloseLinkClassName: 'wepin-widget__close-link',
        // overlayMessage: 'Don’t see the popup? We’ll help you re-open the wepin widget to complete your action.',
        // overlayLinkMessage: 'Click to continue',
        // overlayLinkStyle: 'color: white; text-decoration: underline; font-weight: bold;',
    };
    return overlay;
}());
export { overlay };
//# sourceMappingURL=overlay.js.map