
export function scrollFirstInputErrorUtil() {
    const invalidElements = document.querySelectorAll('.ng-invalid:not(form)');
    if (invalidElements.length > 0) {
        invalidElements[0].scrollIntoView({behavior: "smooth", block: "center"})
    }
}

