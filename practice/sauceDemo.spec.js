const {test, expect} = require('../fixtures/URLfixtureSauce.js')

test("testing inbuilt methods Map sort find filter", async({page, baseURL1})=> {
    //Login test
    const userName = "standard_user";
    const password = "secret_sauce"; 

    await page.goto(baseURL1);
    await page.getByPlaceholder("Username").fill(userName);
    await page.getByPlaceholder("Password").fill(password);
    await page.getByRole("button", { name: "Login"}).click();
    await expect(page.locator(".title")).toHaveText("Products");

    // to sort the products with price low to high 
    await page.getByRole("combobox", {name: ""}).selectOption("lohi");
    const prices = await page.locator(".inventory_item_price ").allTextContents();

   //Replacing $ sign and converting string to number

    const numericPrices = prices.map(price =>
        Number(price.replace("$",""))
    );

    console.log(numericPrices);

    //sorting the prices

    const sortedPrice = [...numericPrices].sort((a,b)=> a-b);
    console.log(sortedPrice);
    expect(sortedPrice).toEqual(numericPrices);

});

