<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require 'vendor/autoload.php';
require 'db.php';

$app = new \Slim\App;

// Test to see if php app is reachable
$app->get('/api/test', function(Request $request, Response $response){
    
    echo '{"notice": "Success!"}';

});

// Get the last 100 records that were added
$app->get('/api/last100', function(Request $request, Response $response){
    
    $sql = "SELECT * FROM mafvecalculations ORDER BY _id DESC LIMIT 100";

    try{
        // Get DB object
        $db = new db();

        // Connect
        $db = $db->connect();

        $stmt = $db->prepare($sql);
        $stmt->execute();
        $records = $stmt->fetchall(PDO::FETCH_OBJ);
        $db = null;

        echo json_encode($records);
        
    } catch(PDOException $e){
        echo '{"notice": ' .$e->getMessage(). '}';
    }
});

// Insert a new record
$app->post('/api/insert', function(Request $request, Response $response){
    
    $year = $request->getParam('year');
    $make = $request->getParam('make');
    $model = $request->getParam('model');
    $engine = $request->getParam('engine');
    $condition = $request->getParam('condition');
    $comments = $request->getParam('comments');
    $mafunits = $request->getParam('mafunits');
    $tempunits = $request->getParam('tempunits');
    $altitudeunits = $request->getParam('altitudeunits');
    $rpm = $request->getParam('rpm');
    $maf = $request->getParam('maf');
    $airtemp = $request->getParam('airtemp');
    $altitude = $request->getParam('altitude');
    $expectedmaf = $request->getParam('expectedmaf');
    $mafdiff = $request->getParam('mafdiff');
    $ve = $request->getParam('ve');

    $sql = "INSERT INTO mafvecalculations (_year, _make, _model, _engine, _condition, _comments, _mafunits,
                                            _tempunits, _altitudeunits, _rpm, _maf, _airtemp, _altitude, _expectedmaf, _mafdiff, _ve)
                                    VALUES (:_year, :_make, :_model, :_engine, :_condition, :_comments, :_mafunits,
                                            :_tempunits, :_altitudeunits, :_rpm, :_maf, :_airtemp, :_altitude, :_expectedmaf, :_mafdiff, :_ve)";

    try{
        // Get DB object
        $db = new db();

        // Connect
        $db = $db->connect();

        $stmt = $db->prepare ($sql);

        $stmt->bindParam(':_year', $year);
        $stmt->bindParam(':_make', $make);
        $stmt->bindParam(':_model', $model);
        $stmt->bindParam(':_engine', $engine);
        $stmt->bindParam(':_condition', $condition);
        $stmt->bindParam(':_comments', $comments);
        $stmt->bindParam(':_mafunits', $mafunits);
        $stmt->bindParam(':_tempunits', $tempunits);
        $stmt->bindParam(':_altitudeunits', $altitudeunits);
        $stmt->bindParam(':_rpm', $rpm);
        $stmt->bindParam(':_maf', $maf);
        $stmt->bindParam(':_airtemp', $airtemp);
        $stmt->bindParam(':_altitude', $altitude);
        $stmt->bindParam(':_expectedmaf', $expectedmaf);
        $stmt->bindParam(':_mafdiff', $mafdiff);
        $stmt->bindParam(':_ve', $ve);

        $stmt->execute();
        $rowsAffected = $stmt->rowCount();

        echo '{"notice": "Record Added", "rows affected": ' .$rowsAffected. '}';

    } catch(PDOException $e){
        echo '{"notice": ' .$e->getMessage(). '}';
    }
});

// Query database
$app->post('/api/query', function(Request $request, Response $response){

    $year = $request->getParam('year');
    $make = $request->getParam('make');
    $model = $request->getParam('model');
    $engine = $request->getParam('engine');
    $condition = $request->getParam('condition');
    $keyword1 = $request->getParam('keyword1');
    $keyword2 = $request->getParam('keyword2');
    $keyword3 = $request->getParam('keyword3');

    unset($queryParams);
    $year_NeedsBinding = false;
    $make_NeedsBinding = false;
    $model_NeedsBinding = false;
    $engine_NeedsBinding = false;
    $condition_NeedsBinding = false;
    $keyword1_NeedsBinding = false;
    $keyword2_NeedsBinding = false;
    $keyword3_NeedsBinding = false;

    if ($year){
        $queryParams[] = "_year = :_year";
        $year_NeedsBinding = true;
    }
    if ($make){
        $queryParams[] = "_make = :_make";
        $make_NeedsBinding = true;
    }
    if ($model){
        $queryParams[] = "_model = :_model";
        $model_NeedsBinding = true;
    }
    if ($engine){
        $queryParams[] = "_engine = :_engine";
        $engine_NeedsBinding = true;
    }
    if ($condition){
        $queryParams[] = "_condition = :_condition";
        $condition_NeedsBinding = true;
    }
    if ($keyword1){
        $queryParams[] = "_comments LIKE :keyword1";
        $keyword1_NeedsBinding = true;
        $keyword1 = "%".$keyword1."%";
    }
    if ($keyword2){
        $queryParams[] = "_comments LIKE :keyword2";
        $keyword2_NeedsBinding = true;
        $keyword2 = "%".$keyword2."%";
    }
    if ($keyword3){
        $queryParams[] = "_comments LIKE :keyword3";
        $keyword3_NeedsBinding = true;
        $keyword3 = "%".$keyword3."%";
    }

    if (!empty($queryParams)){

        $sql = "SELECT * FROM mafvecalculations";
        $sql .= ' WHERE ' . implode(' AND ', $queryParams);
        $sql .= ' ORDER BY _id DESC LIMIT 100';

        try{
            // Get DB object
            $db = new db();
    
            // Connect
            $db = $db->connect();
    
            $stmt = $db->prepare ($sql);
            
            if ($year_NeedsBinding){
                $stmt->bindParam(':_year', $year);
            }
            if ($make_NeedsBinding){
                $stmt->bindParam(':_make', $make);
            }
            if ($model_NeedsBinding){
                $stmt->bindParam(':_model', $model);
            }
            if ($engine_NeedsBinding){
                $stmt->bindParam(':_engine', $engine);
            }
            if ($condition_NeedsBinding){
                $stmt->bindParam(':_condition', $condition);
            }
            if ($keyword1_NeedsBinding){
                $stmt->bindParam(':keyword1', $keyword1);
            }
            if ($keyword2_NeedsBinding){
                $stmt->bindParam(':keyword2', $keyword2);
            }
            if ($keyword3_NeedsBinding){
                $stmt->bindParam(':keyword3', $keyword3);
            }
            
            $stmt->execute();
            $records = $stmt->fetchall(PDO::FETCH_OBJ);
            $db = null;

            if ($records == null){
                echo '{"notice": "No results found"}';
            }
            else{
                echo json_encode($records);
            }

        } catch(PDOException $e){
            echo '{"notice": ' .$e->getMessage(). '}';
        }
    }
    else{
        echo '{"notice": "Cannot perform query. No valid parameters found."}';
    }
});

function extractWords ($inputString) {

    $filterItems = array(",", ".", "!", "?", ";", ":", "|", "-");

    $filteredString = str_replace($filterItems, " ", $inputString);
    $trimmedString = trim($filteredString);
    $extractedWords = preg_split('/\s+/', $trimmedString);

    return $extractedWords;
}

// Test word extraction
$app->post('/api/extract', function(Request $request, Response $response){
    
    $myString = $request->getParam('myString');
    $myString = extractWords($myString);
    var_dump($myString);

});

$app->run();