
document.addEventListener('DOMContentLoaded', function () {
    window.showCategory = function (category) {
        const resourcesContainer = document.getElementById('resourcesContainer');
        resourcesContainer.innerHTML = '';

        const selectedCategory = resources.find(item => item.category === category);

        if (selectedCategory) {
            var categoryDiv = document.createElement('div');
            categoryDiv.className = 'category';

            var categoryHeading = document.createElement('h2');
            categoryHeading.textContent = selectedCategory.category;

            var textParagraph = document.createElement('p');
            textParagraph.textContent = selectedCategory.text;

            var sourcesList = document.createElement('ul');

            for (var j = 0; j < selectedCategory.sources.length; j++) {
                var source = selectedCategory.sources[j];
                var sourceItem = document.createElement('li');
                var sourceLink = document.createElement('a');
                sourceLink.href = source.url;
                sourceLink.textContent = source.title;
                sourceItem.appendChild(sourceLink);
                sourcesList.appendChild(sourceItem);
            }

            categoryDiv.appendChild(categoryHeading);
            categoryDiv.appendChild(textParagraph);
            categoryDiv.appendChild(sourcesList);

            resourcesContainer.appendChild(categoryDiv);
        }

        const navItems = document.querySelectorAll('nav ul li');
        navItems.forEach(item => {
            item.classList.toggle('active', item.textContent.toLowerCase() === category.toLowerCase());
        });
    };

    const activeCategory = 'HTML'; 
    showCategory(activeCategory);

    const navLinks = document.querySelectorAll('nav a');

    function setActiveCategory(category) {
        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href').substring(1) === category.toLowerCase());
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            const category = link.getAttribute('href').substring(1);
            setActiveCategory(category);

        });
    });

    const currentPage = window.location.hash.substring(1).toLowerCase(); 
    setActiveCategory(currentPage);
});
