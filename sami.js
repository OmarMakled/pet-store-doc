
window.projectVersion = 'master';

(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '        <ul>                <li data-name="namespace:App" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App.html">App</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:App_Application" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Application.html">Application</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:App_Application_OrderService" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Application/OrderService.html">OrderService</a>                    </div>                </li>                            <li data-name="class:App_Application_OrderServiceInterface" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Application/OrderServiceInterface.html">OrderServiceInterface</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:App_Domain" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Domain.html">Domain</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:App_Domain_Contracts" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Domain/Contracts.html">Contracts</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:App_Domain_Contracts_HasChipInterface" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Domain/Contracts/HasChipInterface.html">HasChipInterface</a>                    </div>                </li>                            <li data-name="class:App_Domain_Contracts_OrderRepositoryInterface" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Domain/Contracts/OrderRepositoryInterface.html">OrderRepositoryInterface</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:App_Domain_Exceptions" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Domain/Exceptions.html">Exceptions</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:App_Domain_Exceptions_ChipNotFoundException" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Domain/Exceptions/ChipNotFoundException.html">ChipNotFoundException</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:App_Domain_Models" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Domain/Models.html">Models</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:App_Domain_Models_Traits" >                    <div style="padding-left:54px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Domain/Models/Traits.html">Traits</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:App_Domain_Models_Traits_AccessibleTrait" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="App/Domain/Models/Traits/AccessibleTrait.html">AccessibleTrait</a>                    </div>                </li>                            <li data-name="class:App_Domain_Models_Traits_ChipTrait" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="App/Domain/Models/Traits/ChipTrait.html">ChipTrait</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:App_Domain_Models_Bird" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Domain/Models/Bird.html">Bird</a>                    </div>                </li>                            <li data-name="class:App_Domain_Models_Cat" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Domain/Models/Cat.html">Cat</a>                    </div>                </li>                            <li data-name="class:App_Domain_Models_Dog" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Domain/Models/Dog.html">Dog</a>                    </div>                </li>                            <li data-name="class:App_Domain_Models_Order" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Domain/Models/Order.html">Order</a>                    </div>                </li>                            <li data-name="class:App_Domain_Models_Pet" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Domain/Models/Pet.html">Pet</a>                    </div>                </li>                </ul></div>                </li>                </ul></div>                </li>                            <li data-name="namespace:App_Infrastructure" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Infrastructure.html">Infrastructure</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:App_Infrastructure_Exceptions" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Infrastructure/Exceptions.html">Exceptions</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:App_Infrastructure_Exceptions_ProviderNotFoundException" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Infrastructure/Exceptions/ProviderNotFoundException.html">ProviderNotFoundException</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:App_Infrastructure_Services" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Infrastructure/Services.html">Services</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:App_Infrastructure_Services_HttpClient" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Infrastructure/Services/HttpClient.html">HttpClient</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:App_Infrastructure_CloudOrderRepository" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Infrastructure/CloudOrderRepository.html">CloudOrderRepository</a>                    </div>                </li>                            <li data-name="class:App_Infrastructure_MemoryOrderRepository" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Infrastructure/MemoryOrderRepository.html">MemoryOrderRepository</a>                    </div>                </li>                            <li data-name="class:App_Infrastructure_RepositoryFactory" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Infrastructure/RepositoryFactory.html">RepositoryFactory</a>                    </div>                </li>                            <li data-name="class:App_Infrastructure_SqlLiteOrderRepository" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Infrastructure/SqlLiteOrderRepository.html">SqlLiteOrderRepository</a>                    </div>                </li>                </ul></div>                </li>                </ul></div>                </li>                </ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                    
            {"type": "Namespace", "link": "App.html", "name": "App", "doc": "Namespace App"},{"type": "Namespace", "link": "App/Application.html", "name": "App\\Application", "doc": "Namespace App\\Application"},{"type": "Namespace", "link": "App/Domain.html", "name": "App\\Domain", "doc": "Namespace App\\Domain"},{"type": "Namespace", "link": "App/Domain/Contracts.html", "name": "App\\Domain\\Contracts", "doc": "Namespace App\\Domain\\Contracts"},{"type": "Namespace", "link": "App/Domain/Exceptions.html", "name": "App\\Domain\\Exceptions", "doc": "Namespace App\\Domain\\Exceptions"},{"type": "Namespace", "link": "App/Domain/Models.html", "name": "App\\Domain\\Models", "doc": "Namespace App\\Domain\\Models"},{"type": "Namespace", "link": "App/Domain/Models/Traits.html", "name": "App\\Domain\\Models\\Traits", "doc": "Namespace App\\Domain\\Models\\Traits"},{"type": "Namespace", "link": "App/Infrastructure.html", "name": "App\\Infrastructure", "doc": "Namespace App\\Infrastructure"},{"type": "Namespace", "link": "App/Infrastructure/Exceptions.html", "name": "App\\Infrastructure\\Exceptions", "doc": "Namespace App\\Infrastructure\\Exceptions"},{"type": "Namespace", "link": "App/Infrastructure/Services.html", "name": "App\\Infrastructure\\Services", "doc": "Namespace App\\Infrastructure\\Services"},
            {"type": "Interface", "fromName": "App\\Application", "fromLink": "App/Application.html", "link": "App/Application/OrderServiceInterface.html", "name": "App\\Application\\OrderServiceInterface", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Application\\OrderServiceInterface", "fromLink": "App/Application/OrderServiceInterface.html", "link": "App/Application/OrderServiceInterface.html#method_create", "name": "App\\Application\\OrderServiceInterface::create", "doc": "&quot;Add new order&quot;"},
                    {"type": "Method", "fromName": "App\\Application\\OrderServiceInterface", "fromLink": "App/Application/OrderServiceInterface.html", "link": "App/Application/OrderServiceInterface.html#method_weeklyRevenue", "name": "App\\Application\\OrderServiceInterface::weeklyRevenue", "doc": "&quot;Get weekly revenue.&quot;"},
                    {"type": "Method", "fromName": "App\\Application\\OrderServiceInterface", "fromLink": "App/Application/OrderServiceInterface.html", "link": "App/Application/OrderServiceInterface.html#method_count", "name": "App\\Application\\OrderServiceInterface::count", "doc": "&quot;Get total count.&quot;"},
            
            {"type": "Interface", "fromName": "App\\Domain\\Contracts", "fromLink": "App/Domain/Contracts.html", "link": "App/Domain/Contracts/HasChipInterface.html", "name": "App\\Domain\\Contracts\\HasChipInterface", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Domain\\Contracts\\HasChipInterface", "fromLink": "App/Domain/Contracts/HasChipInterface.html", "link": "App/Domain/Contracts/HasChipInterface.html#method_getChipId", "name": "App\\Domain\\Contracts\\HasChipInterface::getChipId", "doc": "&quot;Get chip id&quot;"},
                    {"type": "Method", "fromName": "App\\Domain\\Contracts\\HasChipInterface", "fromLink": "App/Domain/Contracts/HasChipInterface.html", "link": "App/Domain/Contracts/HasChipInterface.html#method_setChipId", "name": "App\\Domain\\Contracts\\HasChipInterface::setChipId", "doc": "&quot;Set chip id&quot;"},
                    {"type": "Method", "fromName": "App\\Domain\\Contracts\\HasChipInterface", "fromLink": "App/Domain/Contracts/HasChipInterface.html", "link": "App/Domain/Contracts/HasChipInterface.html#method_getChipImplementedAt", "name": "App\\Domain\\Contracts\\HasChipInterface::getChipImplementedAt", "doc": "&quot;Get chip implemented at date.&quot;"},
                    {"type": "Method", "fromName": "App\\Domain\\Contracts\\HasChipInterface", "fromLink": "App/Domain/Contracts/HasChipInterface.html", "link": "App/Domain/Contracts/HasChipInterface.html#method_setChipImplementedAt", "name": "App\\Domain\\Contracts\\HasChipInterface::setChipImplementedAt", "doc": "&quot;Set chip implemented at date.&quot;"},
                    {"type": "Method", "fromName": "App\\Domain\\Contracts\\HasChipInterface", "fromLink": "App/Domain/Contracts/HasChipInterface.html", "link": "App/Domain/Contracts/HasChipInterface.html#method_hasChip", "name": "App\\Domain\\Contracts\\HasChipInterface::hasChip", "doc": "&quot;Determine wheter has chip.&quot;"},
            
            {"type": "Interface", "fromName": "App\\Domain\\Contracts", "fromLink": "App/Domain/Contracts.html", "link": "App/Domain/Contracts/OrderRepositoryInterface.html", "name": "App\\Domain\\Contracts\\OrderRepositoryInterface", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Domain\\Contracts\\OrderRepositoryInterface", "fromLink": "App/Domain/Contracts/OrderRepositoryInterface.html", "link": "App/Domain/Contracts/OrderRepositoryInterface.html#method_insert", "name": "App\\Domain\\Contracts\\OrderRepositoryInterface::insert", "doc": "&quot;Insert new order.&quot;"},
                    {"type": "Method", "fromName": "App\\Domain\\Contracts\\OrderRepositoryInterface", "fromLink": "App/Domain/Contracts/OrderRepositoryInterface.html", "link": "App/Domain/Contracts/OrderRepositoryInterface.html#method_get", "name": "App\\Domain\\Contracts\\OrderRepositoryInterface::get", "doc": "&quot;Get orders.&quot;"},
            
            
            {"type": "Class", "fromName": "App\\Application", "fromLink": "App/Application.html", "link": "App/Application/OrderService.html", "name": "App\\Application\\OrderService", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Application\\OrderService", "fromLink": "App/Application/OrderService.html", "link": "App/Application/OrderService.html#method___construct", "name": "App\\Application\\OrderService::__construct", "doc": "&quot;Creates a new order service instance.&quot;"},
                    {"type": "Method", "fromName": "App\\Application\\OrderService", "fromLink": "App/Application/OrderService.html", "link": "App/Application/OrderService.html#method_create", "name": "App\\Application\\OrderService::create", "doc": "&quot;Add new order&quot;"},
                    {"type": "Method", "fromName": "App\\Application\\OrderService", "fromLink": "App/Application/OrderService.html", "link": "App/Application/OrderService.html#method_count", "name": "App\\Application\\OrderService::count", "doc": "&quot;Get total count.&quot;"},
                    {"type": "Method", "fromName": "App\\Application\\OrderService", "fromLink": "App/Application/OrderService.html", "link": "App/Application/OrderService.html#method_weeklyRevenue", "name": "App\\Application\\OrderService::weeklyRevenue", "doc": "&quot;Get weekly revenue.&quot;"},
            
            {"type": "Class", "fromName": "App\\Application", "fromLink": "App/Application.html", "link": "App/Application/OrderServiceInterface.html", "name": "App\\Application\\OrderServiceInterface", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Application\\OrderServiceInterface", "fromLink": "App/Application/OrderServiceInterface.html", "link": "App/Application/OrderServiceInterface.html#method_create", "name": "App\\Application\\OrderServiceInterface::create", "doc": "&quot;Add new order&quot;"},
                    {"type": "Method", "fromName": "App\\Application\\OrderServiceInterface", "fromLink": "App/Application/OrderServiceInterface.html", "link": "App/Application/OrderServiceInterface.html#method_weeklyRevenue", "name": "App\\Application\\OrderServiceInterface::weeklyRevenue", "doc": "&quot;Get weekly revenue.&quot;"},
                    {"type": "Method", "fromName": "App\\Application\\OrderServiceInterface", "fromLink": "App/Application/OrderServiceInterface.html", "link": "App/Application/OrderServiceInterface.html#method_count", "name": "App\\Application\\OrderServiceInterface::count", "doc": "&quot;Get total count.&quot;"},
            
            {"type": "Class", "fromName": "App\\Domain\\Contracts", "fromLink": "App/Domain/Contracts.html", "link": "App/Domain/Contracts/HasChipInterface.html", "name": "App\\Domain\\Contracts\\HasChipInterface", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Domain\\Contracts\\HasChipInterface", "fromLink": "App/Domain/Contracts/HasChipInterface.html", "link": "App/Domain/Contracts/HasChipInterface.html#method_getChipId", "name": "App\\Domain\\Contracts\\HasChipInterface::getChipId", "doc": "&quot;Get chip id&quot;"},
                    {"type": "Method", "fromName": "App\\Domain\\Contracts\\HasChipInterface", "fromLink": "App/Domain/Contracts/HasChipInterface.html", "link": "App/Domain/Contracts/HasChipInterface.html#method_setChipId", "name": "App\\Domain\\Contracts\\HasChipInterface::setChipId", "doc": "&quot;Set chip id&quot;"},
                    {"type": "Method", "fromName": "App\\Domain\\Contracts\\HasChipInterface", "fromLink": "App/Domain/Contracts/HasChipInterface.html", "link": "App/Domain/Contracts/HasChipInterface.html#method_getChipImplementedAt", "name": "App\\Domain\\Contracts\\HasChipInterface::getChipImplementedAt", "doc": "&quot;Get chip implemented at date.&quot;"},
                    {"type": "Method", "fromName": "App\\Domain\\Contracts\\HasChipInterface", "fromLink": "App/Domain/Contracts/HasChipInterface.html", "link": "App/Domain/Contracts/HasChipInterface.html#method_setChipImplementedAt", "name": "App\\Domain\\Contracts\\HasChipInterface::setChipImplementedAt", "doc": "&quot;Set chip implemented at date.&quot;"},
                    {"type": "Method", "fromName": "App\\Domain\\Contracts\\HasChipInterface", "fromLink": "App/Domain/Contracts/HasChipInterface.html", "link": "App/Domain/Contracts/HasChipInterface.html#method_hasChip", "name": "App\\Domain\\Contracts\\HasChipInterface::hasChip", "doc": "&quot;Determine wheter has chip.&quot;"},
            
            {"type": "Class", "fromName": "App\\Domain\\Contracts", "fromLink": "App/Domain/Contracts.html", "link": "App/Domain/Contracts/OrderRepositoryInterface.html", "name": "App\\Domain\\Contracts\\OrderRepositoryInterface", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Domain\\Contracts\\OrderRepositoryInterface", "fromLink": "App/Domain/Contracts/OrderRepositoryInterface.html", "link": "App/Domain/Contracts/OrderRepositoryInterface.html#method_insert", "name": "App\\Domain\\Contracts\\OrderRepositoryInterface::insert", "doc": "&quot;Insert new order.&quot;"},
                    {"type": "Method", "fromName": "App\\Domain\\Contracts\\OrderRepositoryInterface", "fromLink": "App/Domain/Contracts/OrderRepositoryInterface.html", "link": "App/Domain/Contracts/OrderRepositoryInterface.html#method_get", "name": "App\\Domain\\Contracts\\OrderRepositoryInterface::get", "doc": "&quot;Get orders.&quot;"},
            
            {"type": "Class", "fromName": "App\\Domain\\Exceptions", "fromLink": "App/Domain/Exceptions.html", "link": "App/Domain/Exceptions/ChipNotFoundException.html", "name": "App\\Domain\\Exceptions\\ChipNotFoundException", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "App\\Domain\\Models", "fromLink": "App/Domain/Models.html", "link": "App/Domain/Models/Bird.html", "name": "App\\Domain\\Models\\Bird", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "App\\Domain\\Models", "fromLink": "App/Domain/Models.html", "link": "App/Domain/Models/Cat.html", "name": "App\\Domain\\Models\\Cat", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "App\\Domain\\Models", "fromLink": "App/Domain/Models.html", "link": "App/Domain/Models/Dog.html", "name": "App\\Domain\\Models\\Dog", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "App\\Domain\\Models", "fromLink": "App/Domain/Models.html", "link": "App/Domain/Models/Order.html", "name": "App\\Domain\\Models\\Order", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Domain\\Models\\Order", "fromLink": "App/Domain/Models/Order.html", "link": "App/Domain/Models/Order.html#method_getPet", "name": "App\\Domain\\Models\\Order::getPet", "doc": "&quot;Get the value of pet&quot;"},
                    {"type": "Method", "fromName": "App\\Domain\\Models\\Order", "fromLink": "App/Domain/Models/Order.html", "link": "App/Domain/Models/Order.html#method_setPet", "name": "App\\Domain\\Models\\Order::setPet", "doc": "&quot;Set the value of pet&quot;"},
                    {"type": "Method", "fromName": "App\\Domain\\Models\\Order", "fromLink": "App/Domain/Models/Order.html", "link": "App/Domain/Models/Order.html#method_getInsurace", "name": "App\\Domain\\Models\\Order::getInsurace", "doc": "&quot;Get the value of insurace&quot;"},
                    {"type": "Method", "fromName": "App\\Domain\\Models\\Order", "fromLink": "App/Domain/Models/Order.html", "link": "App/Domain/Models/Order.html#method_setInsurace", "name": "App\\Domain\\Models\\Order::setInsurace", "doc": "&quot;Set the value of insurace&quot;"},
                    {"type": "Method", "fromName": "App\\Domain\\Models\\Order", "fromLink": "App/Domain/Models/Order.html", "link": "App/Domain/Models/Order.html#method_getPrice", "name": "App\\Domain\\Models\\Order::getPrice", "doc": "&quot;Get order price from pet&quot;"},
            
            {"type": "Class", "fromName": "App\\Domain\\Models", "fromLink": "App/Domain/Models.html", "link": "App/Domain/Models/Pet.html", "name": "App\\Domain\\Models\\Pet", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Domain\\Models\\Pet", "fromLink": "App/Domain/Models/Pet.html", "link": "App/Domain/Models/Pet.html#method_getId", "name": "App\\Domain\\Models\\Pet::getId", "doc": "&quot;Get pet&#039;s id.&quot;"},
                    {"type": "Method", "fromName": "App\\Domain\\Models\\Pet", "fromLink": "App/Domain/Models/Pet.html", "link": "App/Domain/Models/Pet.html#method_getName", "name": "App\\Domain\\Models\\Pet::getName", "doc": "&quot;Get pet&#039;s name.&quot;"},
                    {"type": "Method", "fromName": "App\\Domain\\Models\\Pet", "fromLink": "App/Domain/Models/Pet.html", "link": "App/Domain/Models/Pet.html#method_setName", "name": "App\\Domain\\Models\\Pet::setName", "doc": "&quot;Set pet&#039;s name&quot;"},
                    {"type": "Method", "fromName": "App\\Domain\\Models\\Pet", "fromLink": "App/Domain/Models/Pet.html", "link": "App/Domain/Models/Pet.html#method_getBirthedAt", "name": "App\\Domain\\Models\\Pet::getBirthedAt", "doc": "&quot;Get pet&#039;s birth date&quot;"},
                    {"type": "Method", "fromName": "App\\Domain\\Models\\Pet", "fromLink": "App/Domain/Models/Pet.html", "link": "App/Domain/Models/Pet.html#method_setBirthedAt", "name": "App\\Domain\\Models\\Pet::setBirthedAt", "doc": "&quot;Set pet&#039;s birth date&quot;"},
                    {"type": "Method", "fromName": "App\\Domain\\Models\\Pet", "fromLink": "App/Domain/Models/Pet.html", "link": "App/Domain/Models/Pet.html#method_getPrice", "name": "App\\Domain\\Models\\Pet::getPrice", "doc": "&quot;Get pet&#039;s price&quot;"},
                    {"type": "Method", "fromName": "App\\Domain\\Models\\Pet", "fromLink": "App/Domain/Models/Pet.html", "link": "App/Domain/Models/Pet.html#method_setPrice", "name": "App\\Domain\\Models\\Pet::setPrice", "doc": "&quot;Set pet&#039;s price&quot;"},
                    {"type": "Method", "fromName": "App\\Domain\\Models\\Pet", "fromLink": "App/Domain/Models/Pet.html", "link": "App/Domain/Models/Pet.html#method_getDescription", "name": "App\\Domain\\Models\\Pet::getDescription", "doc": "&quot;Get pet&#039;s description&quot;"},
                    {"type": "Method", "fromName": "App\\Domain\\Models\\Pet", "fromLink": "App/Domain/Models/Pet.html", "link": "App/Domain/Models/Pet.html#method_setDescription", "name": "App\\Domain\\Models\\Pet::setDescription", "doc": "&quot;Set pet&#039;s description&quot;"},
            
            {"type": "Trait", "fromName": "App\\Domain\\Models\\Traits", "fromLink": "App/Domain/Models/Traits.html", "link": "App/Domain/Models/Traits/AccessibleTrait.html", "name": "App\\Domain\\Models\\Traits\\AccessibleTrait", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Domain\\Models\\Traits\\AccessibleTrait", "fromLink": "App/Domain/Models/Traits/AccessibleTrait.html", "link": "App/Domain/Models/Traits/AccessibleTrait.html#method___get", "name": "App\\Domain\\Models\\Traits\\AccessibleTrait::__get", "doc": "&quot;Allow for property-style retrieval&quot;"},
            
            {"type": "Trait", "fromName": "App\\Domain\\Models\\Traits", "fromLink": "App/Domain/Models/Traits.html", "link": "App/Domain/Models/Traits/ChipTrait.html", "name": "App\\Domain\\Models\\Traits\\ChipTrait", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Domain\\Models\\Traits\\ChipTrait", "fromLink": "App/Domain/Models/Traits/ChipTrait.html", "link": "App/Domain/Models/Traits/ChipTrait.html#method_getChipId", "name": "App\\Domain\\Models\\Traits\\ChipTrait::getChipId", "doc": "&quot;Get chip id&quot;"},
                    {"type": "Method", "fromName": "App\\Domain\\Models\\Traits\\ChipTrait", "fromLink": "App/Domain/Models/Traits/ChipTrait.html", "link": "App/Domain/Models/Traits/ChipTrait.html#method_setChipId", "name": "App\\Domain\\Models\\Traits\\ChipTrait::setChipId", "doc": "&quot;Set chip id&quot;"},
                    {"type": "Method", "fromName": "App\\Domain\\Models\\Traits\\ChipTrait", "fromLink": "App/Domain/Models/Traits/ChipTrait.html", "link": "App/Domain/Models/Traits/ChipTrait.html#method_getChipImplementedAt", "name": "App\\Domain\\Models\\Traits\\ChipTrait::getChipImplementedAt", "doc": "&quot;Get chip implemented at date.&quot;"},
                    {"type": "Method", "fromName": "App\\Domain\\Models\\Traits\\ChipTrait", "fromLink": "App/Domain/Models/Traits/ChipTrait.html", "link": "App/Domain/Models/Traits/ChipTrait.html#method_setChipImplementedAt", "name": "App\\Domain\\Models\\Traits\\ChipTrait::setChipImplementedAt", "doc": "&quot;Set chip implemented at date.&quot;"},
                    {"type": "Method", "fromName": "App\\Domain\\Models\\Traits\\ChipTrait", "fromLink": "App/Domain/Models/Traits/ChipTrait.html", "link": "App/Domain/Models/Traits/ChipTrait.html#method_hasChip", "name": "App\\Domain\\Models\\Traits\\ChipTrait::hasChip", "doc": "&quot;Determine wheter has chip.&quot;"},
            
            {"type": "Class", "fromName": "App\\Infrastructure", "fromLink": "App/Infrastructure.html", "link": "App/Infrastructure/CloudOrderRepository.html", "name": "App\\Infrastructure\\CloudOrderRepository", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Infrastructure\\CloudOrderRepository", "fromLink": "App/Infrastructure/CloudOrderRepository.html", "link": "App/Infrastructure/CloudOrderRepository.html#method___construct", "name": "App\\Infrastructure\\CloudOrderRepository::__construct", "doc": "&quot;Creates a new colud order repository instance.&quot;"},
                    {"type": "Method", "fromName": "App\\Infrastructure\\CloudOrderRepository", "fromLink": "App/Infrastructure/CloudOrderRepository.html", "link": "App/Infrastructure/CloudOrderRepository.html#method_insert", "name": "App\\Infrastructure\\CloudOrderRepository::insert", "doc": "&quot;Insert new order.&quot;"},
                    {"type": "Method", "fromName": "App\\Infrastructure\\CloudOrderRepository", "fromLink": "App/Infrastructure/CloudOrderRepository.html", "link": "App/Infrastructure/CloudOrderRepository.html#method_get", "name": "App\\Infrastructure\\CloudOrderRepository::get", "doc": "&quot;Get orders.&quot;"},
            
            {"type": "Class", "fromName": "App\\Infrastructure\\Exceptions", "fromLink": "App/Infrastructure/Exceptions.html", "link": "App/Infrastructure/Exceptions/ProviderNotFoundException.html", "name": "App\\Infrastructure\\Exceptions\\ProviderNotFoundException", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "App\\Infrastructure", "fromLink": "App/Infrastructure.html", "link": "App/Infrastructure/MemoryOrderRepository.html", "name": "App\\Infrastructure\\MemoryOrderRepository", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Infrastructure\\MemoryOrderRepository", "fromLink": "App/Infrastructure/MemoryOrderRepository.html", "link": "App/Infrastructure/MemoryOrderRepository.html#method_insert", "name": "App\\Infrastructure\\MemoryOrderRepository::insert", "doc": "&quot;Insert new order.&quot;"},
                    {"type": "Method", "fromName": "App\\Infrastructure\\MemoryOrderRepository", "fromLink": "App/Infrastructure/MemoryOrderRepository.html", "link": "App/Infrastructure/MemoryOrderRepository.html#method_get", "name": "App\\Infrastructure\\MemoryOrderRepository::get", "doc": "&quot;Get orders.&quot;"},
            
            {"type": "Class", "fromName": "App\\Infrastructure", "fromLink": "App/Infrastructure.html", "link": "App/Infrastructure/RepositoryFactory.html", "name": "App\\Infrastructure\\RepositoryFactory", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Infrastructure\\RepositoryFactory", "fromLink": "App/Infrastructure/RepositoryFactory.html", "link": "App/Infrastructure/RepositoryFactory.html#method_create", "name": "App\\Infrastructure\\RepositoryFactory::create", "doc": "&quot;A static factory method.&quot;"},
            
            {"type": "Class", "fromName": "App\\Infrastructure\\Services", "fromLink": "App/Infrastructure/Services.html", "link": "App/Infrastructure/Services/HttpClient.html", "name": "App\\Infrastructure\\Services\\HttpClient", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Infrastructure\\Services\\HttpClient", "fromLink": "App/Infrastructure/Services/HttpClient.html", "link": "App/Infrastructure/Services/HttpClient.html#method___construct", "name": "App\\Infrastructure\\Services\\HttpClient::__construct", "doc": "&quot;Creates a new http client instance.&quot;"},
                    {"type": "Method", "fromName": "App\\Infrastructure\\Services\\HttpClient", "fromLink": "App/Infrastructure/Services/HttpClient.html", "link": "App/Infrastructure/Services/HttpClient.html#method_get", "name": "App\\Infrastructure\\Services\\HttpClient::get", "doc": "&quot;Get request&quot;"},
            
            {"type": "Class", "fromName": "App\\Infrastructure", "fromLink": "App/Infrastructure.html", "link": "App/Infrastructure/SqlLiteOrderRepository.html", "name": "App\\Infrastructure\\SqlLiteOrderRepository", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Infrastructure\\SqlLiteOrderRepository", "fromLink": "App/Infrastructure/SqlLiteOrderRepository.html", "link": "App/Infrastructure/SqlLiteOrderRepository.html#method_insert", "name": "App\\Infrastructure\\SqlLiteOrderRepository::insert", "doc": "&quot;Insert new order.&quot;"},
                    {"type": "Method", "fromName": "App\\Infrastructure\\SqlLiteOrderRepository", "fromLink": "App/Infrastructure/SqlLiteOrderRepository.html", "link": "App/Infrastructure/SqlLiteOrderRepository.html#method_get", "name": "App\\Infrastructure\\SqlLiteOrderRepository::get", "doc": "&quot;Get orders.&quot;"},
            
            
                                        // Fix trailing commas in the index
        {}
    ];

    /** Tokenizes strings by namespaces and functions */
    function tokenizer(term) {
        if (!term) {
            return [];
        }

        var tokens = [term];
        var meth = term.indexOf('::');

        // Split tokens into methods if "::" is found.
        if (meth > -1) {
            tokens.push(term.substr(meth + 2));
            term = term.substr(0, meth - 2);
        }

        // Split by namespace or fake namespace.
        if (term.indexOf('\\') > -1) {
            tokens = tokens.concat(term.split('\\'));
        } else if (term.indexOf('_') > 0) {
            tokens = tokens.concat(term.split('_'));
        }

        // Merge in splitting the string by case and return
        tokens = tokens.concat(term.match(/(([A-Z]?[^A-Z]*)|([a-z]?[^a-z]*))/g).slice(0,-1));

        return tokens;
    };

    root.Sami = {
        /**
         * Cleans the provided term. If no term is provided, then one is
         * grabbed from the query string "search" parameter.
         */
        cleanSearchTerm: function(term) {
            // Grab from the query string
            if (typeof term === 'undefined') {
                var name = 'search';
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
                var results = regex.exec(location.search);
                if (results === null) {
                    return null;
                }
                term = decodeURIComponent(results[1].replace(/\+/g, " "));
            }

            return term.replace(/<(?:.|\n)*?>/gm, '');
        },

        /** Searches through the index for a given term */
        search: function(term) {
            // Create a new search index if needed
            if (!bhIndex) {
                bhIndex = new Bloodhound({
                    limit: 500,
                    local: searchIndex,
                    datumTokenizer: function (d) {
                        return tokenizer(d.name);
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace
                });
                bhIndex.initialize();
            }

            results = [];
            bhIndex.get(term, function(matches) {
                results = matches;
            });

            if (!rootPath) {
                return results;
            }

            // Fix the element links based on the current page depth.
            return $.map(results, function(ele) {
                if (ele.link.indexOf('..') > -1) {
                    return ele;
                }
                ele.link = rootPath + ele.link;
                if (ele.fromLink) {
                    ele.fromLink = rootPath + ele.fromLink;
                }
                return ele;
            });
        },

        /** Get a search class for a specific type */
        getSearchClass: function(type) {
            return searchTypeClasses[type] || searchTypeClasses['_'];
        },

        /** Add the left-nav tree to the site */
        injectApiTree: function(ele) {
            ele.html(treeHtml);
        }
    };

    $(function() {
        // Modify the HTML to work correctly based on the current depth
        rootPath = $('body').attr('data-root-path');
        treeHtml = treeHtml.replace(/href="/g, 'href="' + rootPath);
        Sami.injectApiTree($('#api-tree'));
    });

    return root.Sami;
})(window);

$(function() {

    // Enable the version switcher
    $('#version-switcher').change(function() {
        window.location = $(this).val()
    });

    
        // Toggle left-nav divs on click
        $('#api-tree .hd span').click(function() {
            $(this).parent().parent().toggleClass('opened');
        });

        // Expand the parent namespaces of the current page.
        var expected = $('body').attr('data-name');

        if (expected) {
            // Open the currently selected node and its parents.
            var container = $('#api-tree');
            var node = $('#api-tree li[data-name="' + expected + '"]');
            // Node might not be found when simulating namespaces
            if (node.length > 0) {
                node.addClass('active').addClass('opened');
                node.parents('li').addClass('opened');
                var scrollPos = node.offset().top - container.offset().top + container.scrollTop();
                // Position the item nearer to the top of the screen.
                scrollPos -= 200;
                container.scrollTop(scrollPos);
            }
        }

    
    
        var form = $('#search-form .typeahead');
        form.typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, {
            name: 'search',
            displayKey: 'name',
            source: function (q, cb) {
                cb(Sami.search(q));
            }
        });

        // The selection is direct-linked when the user selects a suggestion.
        form.on('typeahead:selected', function(e, suggestion) {
            window.location = suggestion.link;
        });

        // The form is submitted when the user hits enter.
        form.keypress(function (e) {
            if (e.which == 13) {
                $('#search-form').submit();
                return true;
            }
        });

    
});


