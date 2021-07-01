<?php
    
namespace App\Controller;
    
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
    
class DefaultController extends AbstractController
{
    /**
     * @Route("/{reactRouting}", name="home", defaults={"reactRouting": null})
     */
    public function index()
    {
        return $this->render('default/index.html.twig');
    }


    /**
     * @Route("/api/products", name="products")
     * @return \Symfony\Component\HttpFoundation\JsonResponse
     */
    public function getProducts()
    {
        $products = [
        [
            "name"=> "Pioneer DJ Mixer",
            "price"=> 699
        ],
        [
            "name"=> "Roland Wave Sampler",
            "price"=> 485
        ],
        [
            "name"=> "Reloop Headphone",
            "price"=> 159
        ],
        [
            "name"=> "Rokit Monitor",
            "price"=> 189.9
        ],
        [
            "name"=> "Fisherprice Baby Mixer",
            "price"=> 120
        ]
    ];
    
        $response = new Response();

        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');

        $response->setContent(json_encode($products));
        
        return $response;
    }

}
