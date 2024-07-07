// // document.addEventListener('DOMContentLoaded', function () {
// //         const exceptions = {
// //             "AOP (Aspect-Oriented Programming)": [
// //                 {
// //                     name: "AspectException",
// //                     description: "AOP関連の例外が発生した場合にスローされる汎用的な例外。",
// //                     solution: "アスペクトの設定を確認し、メソッドや引数が正しく指定されているかチェックします。AOPの設定ファイルやアノテーションに誤りがないか確認します。"
// //                 },
// //                 {
// //                     name: "IllegalArgumentException",
// //                     description: "アスペクトの引数が不正な場合にスローされる。",
// //                     solution: "メソッドに渡す引数の型や値を確認し、正しい値が渡されているかチェックします。"
// //                 },
// //                 {
// //                     name: "NoSuchMethodException",
// //                     description: "指定されたメソッドが存在しない場合にスローされる。",
// //                     solution: "呼び出そうとしているメソッドの名前、引数の型、パッケージ名などが正しいかを確認します。"
// //                 }
// //             ],
            
            
// //     };
        
// //     const searchInput = document.getElementById('search-input');
// //     const searchBtn = document.getElementById('search-btn');
// //     const categoryList = document.getElementById('category-list');
// //     const exceptionDetail = document.getElementById('exception-detail');
// //     const scrollToTopBtn = document.getElementById('scroll-to-top-btn');
// //     const exportTextBtn = document.getElementById('export-text-btn');

// //     // カテゴリーリストの表示
// //     function displayCategories() {
// //         categoryList.innerHTML = '';
// //         Object.keys(categories).forEach(category => {
// //             const li = document.createElement('li');
// //             li.classList.add('list-group-item', 'category-item');
// //             li.textContent = category;
// //             li.addEventListener('click', () => displayExceptions(category));
// //             categoryList.appendChild(li);
// //         });
// //     }

// //     // 例外リストの表示
// //     function displayExceptions(category) {
// //         const exceptions = categories[category];
// //         exceptionDetail.innerHTML = '<h3>' + category + '</h3>';
// //         exceptions.forEach(exception => {
// //             const div = document.createElement('div');
// //             div.classList.add('exception-item');
// //             div.innerHTML = `
// //                 <h4>${exception.name}</h4>
// //                 <p>${exception.description}</p>
// //                 <h5>対策</h5>
// //                 <p>${exception.solution}</p>
// //             `;
// //             div.addEventListener('click', () => displayExceptionDetail(exception));
// //             exceptionDetail.appendChild(div);
// //         });
// //     }

// //     // 例外の詳細表示
// //     function displayExceptionDetail(exception) {
// //         exceptionDetail.innerHTML = `
// //             <h3>${exception.name}</h3>
// //             <p>${exception.description}</p>
// //             <h4>対策</h4>
// //             <p>${exception.solution}</p>
// //         `;
// //     }

// //     // 検索機能
// //     searchBtn.addEventListener('click', () => {
// //         const query = searchInput.value.toLowerCase();
// //         const filteredCategories = Object.keys(categories).filter(category => 
// //             category.toLowerCase().includes(query)
// //         );
// //         categoryList.innerHTML = '';
// //         filteredCategories.forEach(category => {
// //             const li = document.createElement('li');
// //             li.classList.add('list-group-item', 'category-item');
// //             li.textContent = category;
// //             li.addEventListener('click', () => displayExceptions(category));
// //             categoryList.appendChild(li);
// //         });
// //     });

// //     // スクロールトップボタンの表示
// //     window.addEventListener('scroll', () => {
// //         if (window.scrollY > 200) {
// //             scrollToTopBtn.style.display = 'block';
// //         } else {
// //             scrollToTopBtn.style.display = 'none';
// //         }
// //     });

// //     // スクロールトップ機能
// //     scrollToTopBtn.addEventListener('click', () => {
// //         window.scrollTo({ top: 0, behavior: 'smooth' });
// //     });

// //     // テキスト出力機能
// //     exportTextBtn.addEventListener('click', () => {
// //         let txtContent = '';

// //         Object.keys(categories).forEach(category => {
// //             categories[category].forEach(exception => {
// //                 txtContent += `エラー名: ${exception.name}\n`;
// //                 txtContent += `ユーザー解決方法: ${exception.solution}\n\n`;
// //             });
// //         });

// //         const blob = new Blob([txtContent], { type: 'text/plain' });
// //         const url = URL.createObjectURL(blob);
// //         const a = document.createElement('a');
// //         a.href = url;
// //         a.download = 'UserSolutions.txt';
// //         document.body.appendChild(a);
// //         a.click();
// //         document.body.removeChild(a);
// //         URL.revokeObjectURL(url);
// //     });

// //     // カテゴリー表示初期化
// //     displayCategories();
// // });

// document.addEventListener('DOMContentLoaded', function () {
//     const categories = {
//         "AOP (Aspect-Oriented Programming)": [
//             {
//                 name: "AspectException",
//                 description: "AOP関連の例外が発生した場合にスローされる汎用的な例外。",
//                 solution: "アスペクトの設定を確認し、メソッドや引数が正しく指定されているかチェックします。AOPの設定ファイルやアノテーションに誤りがないか確認します。"
//             },
//             {
//                 name: "IllegalArgumentException",
//                 description: "アスペクトの引数が不正な場合にスローされる。",
//                 solution: "メソッドに渡す引数の型や値を確認し、正しい値が渡されているかチェックします。"
//             },
//             {
//                 name: "NoSuchMethodException",
//                 description: "指定されたメソッドが存在しない場合にスローされる。",
//                 solution: "呼び出そうとしているメソッドの名前、引数の型、パッケージ名などが正しいかを確認します。"
//             }
//         ],
        
//     };

//     const searchInput = document.getElementById('search-input');
//     const searchBtn = document.getElementById('search-btn');
//     const categoryList = document.getElementById('category-list');
//     const exceptionDetail = document.getElementById('exception-detail');
//     const scrollToTopBtn = document.getElementById('scroll-to-top-btn');
//     const exportTextBtn = document.getElementById('export-text-btn');

//     // カテゴリーリストの表示
//     function displayCategories() {
//         categoryList.innerHTML = '';
//         Object.keys(exceptions).forEach(category => {
//             const li = document.createElement('li');
//             li.classList.add('list-group-item', 'category-item');
//             li.textContent = category;
//             li.addEventListener('click', () => displayExceptions(category));
//             categoryList.appendChild(li);
//         });
//     }

//     // 例外リストの表示
//     function displayExceptions(category) {
//         const exceptionList = exceptions[category];
//         exceptionDetail.innerHTML = '<h3>' + category + '</h3>';
//         exceptionList.forEach(exception => {
//             const div = document.createElement('div');
//             div.classList.add('exception-item');
//             div.innerHTML = `
//                 <h4>${exception.name}</h4>
//                 <p>${exception.description}</p>
//                 <h5>対策</h5>
//                 <p>${exception.solution}</p>
//             `;
//             div.addEventListener('click', () => displayExceptionDetail(exception));
//             exceptionDetail.appendChild(div);
//         });
//     }

//     // 例外の詳細表示
//     function displayExceptionDetail(exception) {
//         exceptionDetail.innerHTML = `
//             <h3>${exception.name}</h3>
//             <p>${exception.description}</p>
//             <h4>対策</h4>
//             <p>${exception.solution}</p>
//         `;
//     }

//     // 検索機能
//     searchBtn.addEventListener('click', () => {
//         const query = searchInput.value.toLowerCase();
//         let found = false;
//         exceptionDetail.innerHTML = '<h3>検索結果</h3>';
//         Object.keys(exceptions).forEach(category => {
//             exceptions[category].forEach(exception => {
//                 if (exception.name.toLowerCase().includes(query)) {
//                     found = true;
//                     const div = document.createElement('div');
//                     div.classList.add('exception-item');
//                     div.innerHTML = `
//                         <h4>${exception.name}</h4>
//                         <p>${exception.description}</p>
//                         <h5>対策</h5>
//                         <p>${exception.solution}</p>
//                     `;
//                     div.addEventListener('click', () => displayExceptionDetail(exception));
//                     exceptionDetail.appendChild(div);
//                 }
//             });
//         });
//         if (!found) {
//             exceptionDetail.innerHTML += '<p>検索結果が見つかりませんでした。</p>';
//         }
//     });

//     // スクロールトップボタンの表示
//     window.addEventListener('scroll', () => {
//         if (window.scrollY > 200) {
//             scrollToTopBtn.style.display = 'block';
//         } else {
//             scrollToTopBtn.style.display = 'none';
//         }
//     });

//     // スクロールトップ機能
//     scrollToTopBtn.addEventListener('click', () => {
//         window.scrollTo({ top: 0, behavior: 'smooth' });
//     });

//     // テキスト出力機能
//     exportTextBtn.addEventListener('click', () => {
//         let txtContent = '';

//         Object.keys(exceptions).forEach(category => {
//             exceptions[category].forEach(exception => {
//                 txtContent += `エラー名: ${exception.name}\n`;
//                 txtContent += `ユーザー解決方法: ${exception.solution}\n\n`;
//             });
//         });

//         const blob = new Blob([txtContent], { type: 'text/plain' });
//         const url = URL.createObjectURL(blob);
//         const a = document.createElement('a');
//         a.href = url;
//         a.download = 'UserSolutions.txt';
//         document.body.appendChild(a);
//         a.click();
//         document.body.removeChild(a);
//         URL.revokeObjectURL(url);
//     });

//     // カテゴリー表示初期化
//     displayCategories();
// });

document.addEventListener('DOMContentLoaded', function () {
    const exceptions = {
        "AOP (Aspect-Oriented Programming)": [
            {
                name: "AspectException",
                description: "AOP関連の例外が発生した場合にスローされる汎用的な例外。",
                solution: "アスペクトの設定を確認し、メソッドや引数が正しく指定されているかチェックします。AOPの設定ファイルやアノテーションに誤りがないか確認します。"
            },
            {
                name: "IllegalArgumentException",
                description: "アスペクトの引数が不正な場合にスローされる。",
                solution: "メソッドに渡す引数の型や値を確認し、正しい値が渡されているかチェックします。"
            },
            {
                name: "NoSuchMethodException",
                description: "指定されたメソッドが存在しない場合にスローされる。",
                solution: "呼び出そうとしているメソッドの名前、引数の型、パッケージ名などが正しいかを確認します。"
            }
        ],
        "データアクセス (Spring Data)": [
                {
                    name: "DataAccessException",
                    description: "データアクセスに関する汎用的な例外。",
                    solution: "データベースの接続設定やクエリの記述に誤りがないか確認します。エラーログを解析して、具体的な原因を特定します。"
                },
                {
                    name: "DataIntegrityViolationException",
                    description: "データの整合性違反が発生した場合にスローされる。",
                    solution: "データベースの制約（主キー、一意制約、外部キー制約など）を確認し、データがこれらの制約に違反していないかチェックします。"
                },
                {
                    name: "DuplicateKeyException",
                    description: "一意制約違反が発生した場合にスローされる。",
                    solution: "挿入または更新しようとしているデータが一意制約を満たしているか確認します。同じキーのデータが既に存在しないかをチェックします。"
                },
                {
                    name: "EmptyResultDataAccessException",
                    description: "クエリの結果が空だった場合にスローされる。",
                    solution: "クエリが正しいか、検索条件が正しく設定されているか確認します。結果が空であることが許容される場合は、その対策を追加します。"
                },
                {
                    name: "IncorrectResultSizeDataAccessException",
                    description: "クエリの結果サイズが期待したサイズと異なる場合にスローされる。",
                    solution: "クエリの結果が期待されるサイズ（例えば、一意の結果を期待しているのに複数の結果が返ってくるなど）に合致しているか確認します。"
                }
            ],
            "データベース (Spring Database)": [
                {
                    name: "CannotAcquireLockException",
                    description: "データベースロックの取得に失敗した場合にスローされる。",
                    solution: "ロックの取得が適切に行われるように、ロックの競合を避けるようにトランザクションの設計を見直します。"
                },
                {
                    name: "CannotCreateTransactionException",
                    description: "トランザクションの作成に失敗した場合にスローされる。",
                    solution: "データベースの接続設定を確認し、トランザクションの設定に誤りがないか確認します。"
                },
                {
                    name: "CannotSerializeTransactionException",
                    description: "トランザクションのシリアライズに失敗した場合にスローされる。",
                    solution: "トランザクションの分離レベルを調整し、シリアライズ可能な状態で実行されるようにします。"
                },
                {
                    name: "DeadlockLoserDataAccessException",
                    description: "デッドロックが検出された場合にスローされる。",
                    solution: "トランザクションの設計を見直し、デッドロックを回避するための適切なロック順序を確保します。"
                },
                {
                    name: "IncorrectUpdateSemanticsDataAccessException",
                    description: "更新の意味が正しくない場合にスローされる。",
                    solution: "更新クエリが正しいか、意図した行を更新できているか確認します。"
                },
                {
                    name: "InvalidDataAccessApiUsageException",
                    description: "データアクセスAPIの使用が無効な場合にスローされる。",
                    solution: "使用しているデータアクセスAPIの正しい使い方を確認し、誤った使用方法を修正します。"
                },
                {
                    name: "InvalidDataAccessResourceUsageException",
                    description: "データアクセスリソースの使用が無効な場合にスローされる。",
                    solution: "データベースリソース（接続、ステートメント、リソースなど）の正しい使用方法を確認します。"
                },
                {
                    name: "OptimisticLockingFailureException",
                    description: "楽観的ロックの失敗が発生した場合にスローされる。",
                    solution: "楽観的ロックのバージョン管理が適切に行われているか確認し、バージョンの競合が発生しないようにします。"
                },
                {
                    name: "PessimisticLockingFailureException",
                    description: "悲観的ロックの失敗が発生した場合にスローされる。",
                    solution: "悲観的ロックの使用が適切に行われているか確認し、ロックの取得と解放が正しく行われているかチェックします。"
                },
                {
                    name: "QueryTimeoutException",
                    description: "クエリのタイムアウトが発生した場合にスローされる。",
                    solution: "クエリの実行時間を見直し、必要に応じてインデックスの追加やクエリの最適化を行います。"
                }
            ],
            "トランザクション (Spring Transaction Management)": [
                {
                    name: "CannotCreateTransactionException",
                    description: "トランザクションの作成に失敗した場合にスローされる。",
                    solution: "データベースの接続設定やトランザクションマネージャの設定を確認し、問題がないかチェックします。"
                },
                {
                    name: "TransactionException",
                    description: "トランザクションに関する汎用的な例外。",
                    solution: "トランザクションの設定や使用方法を確認し、エラーログを解析して具体的な原因を特定します。"
                },
                {
                    name: "TransactionTimedOutException",
                    description: "トランザクションがタイムアウトした場合にスローされる。",
                    solution: "トランザクションのタイムアウト設定を確認し、必要に応じて適切な時間に調整します。"
                },
                {
                    name: "UnexpectedRollbackException",
                    description: "トランザクションが意図せずロールバックされた場合にスローされる。",
                    solution: "トランザクション内の処理を確認し、ロールバックが発生した原因を特定して修正します。"
                }
            ],
            "MVC (Spring MVC)": [
                {
                    name: "HttpMediaTypeNotAcceptableException",
                    description: "リクエストされたメディアタイプが受け入れられない場合にスローされる。",
                    solution: "コントローラのメソッドがサポートするメディアタイプを確認し、リクエストのAcceptヘッダを適切に設定します。"
                },
                {
                    name: "HttpMediaTypeNotSupportedException",
                    description: "サポートされていないメディアタイプがリクエストされた場合にスローされる。",
                    solution: "コントローラのメソッドがサポートするメディアタイプを確認し、リクエストのContent-Typeヘッダを適切に設定します。"
                },
                {
                    name: "HttpRequestMethodNotSupportedException",
                    description: "サポートされていないHTTPメソッドがリクエストされた場合にスローされる。",
                    solution: "コントローラのメソッドがサポートするHTTPメソッドを確認し、リクエストが適切なメソッドで送信されているかチェックします。"
                },
                {
                    name: "MissingServletRequestParameterException",
                    description: "必須のリクエストパラメータが不足している場合にスローされる。",
                    solution: "リクエストパラメータの名前や値を確認し、必須パラメータが含まれているかチェックします。"
                },
                {
                    name: "ServletRequestBindingException",
                    description: "リクエストのバインディングに失敗した場合にスローされる。",
                    solution: "リクエストのバインディング設定やバインド対象のデータを確認し、問題がないかチェックします。"
                }
            ],
            "セキュリティ (Spring Security)": [
                {
                    name: "AccessDeniedException",
                    description: "アクセスが拒否された場合にスローされる。",
                    solution: "ユーザーの権限設定やアクセス制御設定を確認し、適切な権限が付与されているかチェックします。"
                },
                {
                    name: "AccountExpiredException",
                    description: "アカウントの有効期限が切れている場合にスローされる。",
                    solution: "ユーザーアカウントの有効期限を確認し、必要に応じてアカウントの有効期限を延長します。"
                },
                {
                    name: "AuthenticationException",
                    description: "認証に失敗した場合にスローされる汎用的な例外。",
                    solution: "認証プロセスやユーザー情報を確認し、認証情報が正しいかチェックします。"
                },
                {
                    name: "BadCredentialsException",
                    description: "提供された認証情報が無効な場合にスローされる。",
                    solution: "ユーザー名やパスワードが正しいか確認し、認証情報が正しいか再度入力します。"
                }
            ],
            "REST (Spring REST)": [
                {
                    name: "HttpClientErrorException",
                    description: "クライアントエラー (4xx) が発生した場合にスローされる。",
                    solution: "クライアントからのリクエストが正しいか、URLやパラメータ、ヘッダなどを確認します。"
                },
                {
                    name: "HttpServerErrorException",
                    description: "サーバーエラー (5xx) が発生した場合にスローされる。",
                    solution: "サーバー側の設定や処理ロジックを確認し、エラーログを解析して原因を特定します。"
                },
                {
                    name: "ResourceAccessException",
                    description: "リソースへのアクセスに失敗した場合にスローされる。",
                    solution: "リソースのURLやアクセス権限を確認し、適切なアクセス権限が付与されているかチェックします。"
                }
            ],
            "その他": [
                {
                    name: "ConversionNotSupportedException",
                    description: "型変換がサポートされていない場合にスローされる。",
                    solution: "型変換の設定や対象の型が正しいか確認し、必要に応じてカスタムコンバータを実装します。"
                },
                {
                    name: "IllegalArgumentException",
                    description: "不正な引数が渡された場合にスローされる。",
                    solution: "メソッドに渡す引数が正しいか確認し、適切な値を渡します。"
                },
                {
                    name: "IllegalStateException",
                    description: "不正な状態が検出された場合にスローされる。",
                    solution: "アプリケーションの状態を確認し、適切な初期化や設定が行われているかチェックします。"
                },
                {
                    name: "IndexOutOfBoundsException",
                    description: "インデックスが範囲外の場合にスローされる。",
                    solution: "配列やリストのインデックスを確認し、範囲外アクセスが発生しないように修正します。"
                },
                {
                    name: "MethodArgumentNotValidException",
                    description: "メソッド引数が無効な場合にスローされる。",
                    solution: "メソッドに渡す引数のバリデーションを確認し、適切な値が渡されているかチェックします。"
                },
                {
                    name: "MissingPathVariableException",
                    description: "パス変数が不足している場合にスローされる。",
                    solution: "URLパスに必要な変数が含まれているか確認し、リクエストが正しい形式で送信されているかチェックします。"
                },
                {
                    name: "MissingServletRequestPartException",
                    description: "必須のリクエストパートが不足している場合にスローされる。",
                    solution: "リクエストのマルチパートデータが正しく送信されているか確認し、必須パートが含まれているかチェックします。"
                },
                {
                    name: "NullPointerException",
                    description: "null参照にアクセスしようとした場合にスローされる。",
                    solution: "nullチェックを追加し、null参照が発生しないようにコードを修正します。"
                },
                {
                    name: "TypeMismatchException",
                    description: "型の不一致が発生した場合にスローされる。",
                    solution: "期待される型と実際の型を確認し、型が一致するように修正します。"
                }
            ],
            "スプリング全般": [
                {
                    name: "BeanCreationException",
                    description: "Beanの作成に失敗した場合にスローされる。",
                    solution: "Beanの定義や依存関係を確認し、Beanの初期化が正しく行われているかチェックします。"
                },
                {
                    name: "BeanCurrentlyInCreationException",
                    description: "循環依存関係が発生した場合にスローされる。",
                    solution: "Bean間の依存関係を見直し、循環参照が発生しないように設計を修正します。"
                },
                {
                    name: "BeanInitializationException",
                    description: "Beanの初期化に失敗した場合にスローされる。",
                    solution: "Beanの初期化メソッドや依存関係を確認し、初期化が正しく行われているかチェックします。"
                },
                {
                    name: "NoSuchBeanDefinitionException",
                    description: "指定されたBeanが見つからない場合にスローされる。",
                    solution: "Beanの定義が正しいか、Beanが正しく登録されているか確認します。"
                },
                {
                    name: "ScopeNotActiveException",
                    description: "カスタムスコープがアクティブでない場合にスローされる。",
                    solution: "カスタムスコープの設定を確認し、スコープが正しくアクティブになっているかチェックします。"
                },
                {
                    name: "UnsatisfiedDependencyException",
                    description: "Beanの依存関係が解決できなかった場合にスローされる。",
                    solution: "依存関係が正しく解決されているか、必要なBeanが正しく登録されているか確認します。"
                }
            ],
            "java.util": [
    {
        name: "ConcurrentModificationException",
        description: "コレクションが変更されると、コレクションのイテレータによってスローされる例外。",
        solution: "コレクションを反復処理しながら変更しないようにします。または、java.util.concurrentパッケージのスレッドセーフなコレクションを使用します。"
    },
    {
        name: "NoSuchElementException",
        description: "コレクションの要素が見つからない場合にスローされる例外。",
        solution: "コレクションのサイズをチェックし、要素が存在するかを確認してからアクセスします。"
    },
    {
        name: "InputMismatchException",
        description: "入力が期待される型と一致しない場合にスローされる例外。",
        solution: "入力値の型が正しいか確認し、必要に応じて型変換を行います。"
    },
    {
        name: "IllegalFormatException",
        description: "不正な形式指定子が使用された場合にスローされる例外。",
        solution: "フォーマット指定子が正しいか、引数の型がフォーマット指定子に適しているかを確認します。"
    },
    {
        name: "MissingResourceException",
        description: "リソースバンドルが見つからない場合にスローされる例外。",
        solution: "リソースバンドルの名前とパスが正しいか、リソースが存在するかを確認します。"
    },
    {
        name: "TooManyListenersException",
        description: "リスナーが一度に追加されすぎた場合にスローされる例外。",
        solution: "リスナーの数を制御し、必要に応じてリスナーを削除します。"
    },
    {
        name: "DuplicateFormatFlagsException",
        description: "フォーマットフラグが重複している場合にスローされる例外。",
        solution: "フォーマットフラグが重複しないようにフォーマット文字列を修正します。"
    },
    {
        name: "EmptyStackException",
        description: "スタックが空の場合にポップ操作を試みるとスローされる例外。",
        solution: "スタックが空でないことを確認してから操作を行います。"
    },
    {
        name: "IllegalFormatCodePointException",
        description: "無効なUnicodeコードポイントを持つ形式指定子が使用された場合にスローされる例外。",
        solution: "Unicodeコードポイントが正しいか確認し、フォーマット文字列を修正します。"
    },
    {
        name: "IllformedLocaleException",
        description: "不正な形式のロケールを指定した場合にスローされる例外。",
        solution: "ロケールの形式が正しいか確認し、適切な形式に修正します。"
    },
    {
        name: "InvalidPropertiesFormatException",
        description: "Propertiesファイルの形式が無効な場合にスローされる例外。",
        solution: "Propertiesファイルの形式が正しいか確認し、必要に応じて修正します。"
    },
    {
        name: "FormatterClosedException",
        description: "クローズされたフォーマッタを操作しようとした場合にスローされる例外。",
        solution: "フォーマッタがクローズされていないことを確認し、クローズされている場合は新しいフォーマッタを使用します。"
    },
    {
        name: "IllegalFormatPrecisionException",
        description: "フォーマット指定子に対して無効な精度が指定された場合にスローされる例外。",
        solution: "フォーマット指定子に対して正しい精度を指定します。"
    },
    {
        name: "IllegalFormatWidthException",
        description: "フォーマット指定子に対して無効な幅が指定された場合にスローされる例外。",
        solution: "フォーマット指定子に対して正しい幅を指定します。"
    },
    {
        name: "MissingFormatArgumentException",
        description: "フォーマット指定子に対応する引数が見つからない場合にスローされる例外。",
        solution: "すべてのフォーマット指定子に対応する引数を提供します。"
    },
    {
        name: "MissingFormatWidthException",
        description: "フォーマット指定子に必要な幅が指定されていない場合にスローされる例外。",
        solution: "必要な幅を指定するか、フォーマット指定子を修正します。"
    },
    {
        name: "UnknownFormatConversionException",
        description: "不明なフォーマット変換が指定された場合にスローされる例外。",
        solution: "フォーマット指定子が正しいか確認し、適切な変換を指定します。"
    },
    {
        name: "UnknownFormatFlagsException",
        description: "不明なフォーマットフラグが指定された場合にスローされる例外。",
        solution: "フォーマットフラグが正しいか確認し、適切なフラグを指定します。"
    },
    {
        name: "IllegalFormatConversionException",
        description: "フォーマット指定子に対して無効な引数の型が指定された場合にスローされる例外。",
        solution: "フォーマット指定子に適した型の引数を提供します。"
    },
    {
        name: "DuplicateFormatFlagsException",
        description: "フォーマットフラグが重複している場合にスローされる例外。",
        solution: "フォーマットフラグが重複しないようにフォーマット文字列を修正します。"
    },
    {
        name: "FormatFlagsConversionMismatchException",
        description: "フォーマットフラグと変換が一致しない場合にスローされる例外。",
        solution: "フォーマットフラグと変換が一致するように修正します。"
    }
],

            "JPA (Java Persistence API)": [
                {
                    name: "EntityNotFoundException",
                    description: "指定されたエンティティが見つからない場合にスローされる。",
                    solution: "クエリが正しいか、エンティティが存在するか確認します。必要に応じてエンティティの作成やクエリの修正を行います。"
                },
                {
                    name: "NonUniqueResultException",
                    description: "クエリの結果が一意でない場合にスローされる。",
                    solution: "クエリが一意の結果を返すように条件を修正します。"
                },
                {
                    name: "OptimisticLockException",
                    description: "楽観的ロックの衝突が発生した場合にスローされる。",
                    solution: "エンティティのバージョン管理が正しく行われているか確認し、バージョンの競合を解決します。"
                },
                {
                    name: "TransactionRequiredException",
                    description: "トランザクションが必要な操作がトランザクション外で実行された場合にスローされる。",
                    solution: "トランザクションが正しく開始されているか確認し、必要な操作がトランザクション内で実行されるように修正します。"
                }
            ],
            "WebFlux (Spring WebFlux)": [
                {
                    name: "ResponseStatusException",
                    description: "HTTPステータスに基づく例外が発生した場合にスローされる。",
                    solution: "エラーハンドリングを実装し、適切なHTTPステータスコードとエラーメッセージを返すようにします。"
                },
                {
                    name: "WebExchangeBindException",
                    description: "WebFluxのデータバインドに失敗した場合にスローされる。",
                    solution: "データバインドの設定やバインド対象のデータを確認し、問題がないかチェックします。"
                }
            ],
            "WebSocket (Spring WebSocket)": [
                {
                    name: "SessionLimitExceededException",
                    description: "WebSocketセッションの制限を超えた場合にスローされる。",
                    solution: "WebSocketセッションの制限を確認し、必要に応じて制限を緩和します。"
                },
                {
                    name: "WebSocketHandlerException",
                    description: "WebSocketハンドラに関連する例外が発生した場合にスローされる。",
                    solution: "WebSocketハンドラの実装を確認し、例外が発生する原因を特定して修正します。"
                }
            ],
            "バッチ処理 (Spring Batch)": [
                {
                    name: "JobExecutionException",
                    description: "ジョブの実行に失敗した場合にスローされる。",
                    solution: "ジョブの設定や処理ロジックを確認し、エラーログを解析して原因を特定します。"
                },
                {
                    name: "JobInstanceAlreadyCompleteException",
                    description: "既に完了したジョブが再実行されようとした場合にスローされる。",
                    solution: "ジョブの再実行が必要か確認し、必要に応じて新しいジョブインスタンスを作成します。"
                },
                {
                    name: "JobRestartException",
                    description: "ジョブの再起動に失敗した場合にスローされる。",
                    solution: "ジョブの状態を確認し、再起動が正しく行われるように設定を見直します。"
                }
            ],
            "メッセージング (Spring Messaging)": [
                {
                    name: "MessageDeliveryException",
                    description: "メッセージの配信に失敗した場合にスローされる。",
                    solution: "メッセージの配信設定や接続設定を確認し、配信が正しく行われるように修正します。"
                },
                {
                    name: "MessageHandlingException",
                    description: "メッセージの処理中に発生した例外。",
                    solution: "メッセージの処理ロジックを確認し、エラーログを解析して原因を特定します。"
                }
            ],
            "RSocket (Spring RSocket)": [
                {
                    name: "ConnectionErrorException",
                    description: "RSocketの接続エラーが発生した場合にスローされる。",
                    solution: "RSocketの接続設定を確認し、接続が正しく行われるように修正します。"
                },
                {
                    name: "RSocketException",
                    description: "RSocket関連の例外が発生した場合にスローされる。",
                    solution: "RSocketの設定や処理ロジックを確認し、エラーログを解析して原因を特定します。"
                }
            ],
            "キャッシュ (Spring Cache)": [
                {
                    name: "CacheException",
                    description: "キャッシュ操作中に発生した汎用的な例外。",
                    solution: "キャッシュの設定や操作が正しく行われているか確認し、エラーログを解析して原因を特定します。"
                },
                {
                    name: "InvalidDataAccessApiUsageException",
                    description: "キャッシュのデータアクセスに関する不正な使用が発生した場合にスローされる。",
                    solution: "キャッシュのデータアクセスAPIの使用方法を確認し、正しい使用方法に修正します。"
                }
            ],
            "クラウド (Spring Cloud)": [
                {
                    name: "CircuitBreakerException",
                    description: "サーキットブレーカーに関連する例外が発生した場合にスローされる。",
                    solution: "サーキットブレーカーの設定や使用方法を確認し、適切な設定に修正します。"
                },
                {
                    name: "DiscoveryClientException",
                    description: "サービスディスカバリに関連する例外が発生した場合にスローされる。",
                    solution: "サービスディスカバリの設定や接続設定を確認し、エラーログを解析して原因を特定します。"
                }
            ],
            "Spring Boot": [
                {
                    name: "ApplicationContextException",
                    description: "アプリケーションコンテキストの作成または初期化に失敗した場合にスローされる。",
                    solution: "アプリケーションコンテキストの設定や依存関係を確認し、初期化が正しく行われているかチェックします。"
                },
                {
                    name: "SpringBootException",
                    description: "Spring Boot全般に関連する汎用的な例外。",
                    solution: "Spring Bootの設定や使用方法を確認し、エラーログを解析して原因を特定します。"
                }
            ],
            "エラーハンドリング (Global Exception Handling)": [
                {
                    name: "RestClientException",
                    description: "RESTクライアント操作中に発生した汎用的な例外。",
                    solution: "RESTクライアントの設定や使用方法を確認し、エラーログを解析して原因を特定します。"
                },
                {
                    name: "ResponseStatusException",
                    description: "レスポンスステータスに基づくカスタム例外。",
                    solution: "エラーハンドリングを実装し、適切なHTTPステータスコードとエラーメッセージを返すようにします。"
                }
            ],
            "Spring Integration": [
                {
                    name: "MessageDispatchingException",
                    description: "メッセージのディスパッチ中に問題が発生した場合にスローされる。",
                    solution: "メッセージのディスパッチ設定や接続設定を確認し、ディスパッチが正しく行われるように修正します。"
                },
                {
                    name: "MessageHandlingException",
                    description: "メッセージのハンドリング中に問題が発生した場合にスローされる。",
                    solution: "メッセージのハンドリングロジックを確認し、エラーログを解析して原因を特定します。"
                },
                {
                    name: "MessagingException",
                    description: "一般的なメッセージング例外。",
                    solution: "メッセージングの設定や使用方法を確認し、エラーログを解析して原因を特定します。"
                }
            ],
            "Spring AMQP (Advanced Message Queuing Protocol)": [
                {
                    name: "AmqpAuthenticationException",
                    description: "AMQPの認証に失敗した場合にスローされる。",
                    solution: "AMQPの認証設定を確認し、認証情報が正しいかチェックします。"
                },
                {
                    name: "AmqpConnectException",
                    description: "AMQPブローカーへの接続に失敗した場合にスローされる。",
                    solution: "AMQPの接続設定を確認し、接続が正しく行われるように修正します。"
                },
                {
                    name: "AmqpException",
                    description: "AMQP操作に関する汎用的な例外。",
                    solution: "AMQPの設定や使用方法を確認し、エラーログを解析して原因を特定します。"
                },
                {
                    name: "AmqpIOException",
                    description: "AMQPのI/O操作に失敗した場合にスローされる。",
                    solution: "AMQPのI/O操作の設定や接続設定を確認し、問題がないかチェックします。"
                },
                {
                    name: "MessageConversionException",
                    description: "メッセージの変換に失敗した場合にスローされる。",
                    solution: "メッセージの変換設定やフォーマットを確認し、適切に変換されるように修正します。"
                }
            ],
            "Spring Kafka": [
                {
                    name: "KafkaConsumerException",
                    description: "Kafkaのコンシューマ操作中に発生した例外。",
                    solution: "Kafkaのコンシューマ設定や接続設定を確認し、エラーログを解析して原因を特定します。"
                },
                {
                    name: "KafkaException",
                    description: "Kafka操作に関する汎用的な例外。",
                    solution: "Kafkaの設定や使用方法を確認し、エラーログを解析して原因を特定します。"
                },
                {
                    name: "KafkaProducerException",
                    description: "Kafkaのプロデューサー操作中に発生した例外。",
                    solution: "Kafkaのプロデューサー設定や接続設定を確認し、エラーログを解析して原因を特定します。"
                }
            ],
            "Spring Cloud Stream": [
                {
                    name: "BinderException",
                    description: "バインダの設定や操作に失敗した場合にスローされる。",
                    solution: "バインダの設定や使用方法を確認し、エラーログを解析して原因を特定します。"
                },
                {
                    name: "MessageChannelNotFoundException",
                    description: "メッセージチャネルが見つからない場合にスローされる。",
                    solution: "メッセージチャネルの設定や名前を確認し、正しいチャネルが設定されているかチェックします。"
                }
            ],
            "Spring Session": [
                {
                    name: "InvalidSessionIdException",
                    description: "無効なセッションIDが提供された場合にスローされる。",
                    solution: "セッションIDの生成と管理が正しく行われているか確認し、無効なセッションIDが使われていないかチェックします。"
                },
                {
                    name: "SessionRepositoryException",
                    description: "セッションリポジトリ操作中に発生した例外。",
                    solution: "セッションリポジトリの設定や使用方法を確認し、エラーログを解析して原因を特定します。"
                }
            ],
            "Spring State Machine": [
                {
                    name: "StateMachineException",
                    description: "状態マシンの操作中に発生した汎用的な例外。",
                    solution: "状態マシンの設定やトランジションロジックを確認し、エラーログを解析して原因を特定します。"
                },
                {
                    name: "StateMachineTransitionException",
                    description: "状態遷移に失敗した場合にスローされる。",
                    solution: "状態遷移の条件やトリガーを確認し、正しく設定されているかチェックします。"
                }
            ],
            "Spring Shell": [
                {
                    name: "CommandExecutionException",
                    description: "コマンドの実行中に発生した例外。",
                    solution: "コマンドの実行ロジックを確認し、エラーログを解析して原因を特定します。"
                },
                {
                    name: "CommandNotFoundException",
                    description: "指定されたコマンドが見つからない場合にスローされる。",
                    solution: "コマンドの名前や引数を確認し、正しいコマンドが実行されているかチェックします。"
                }
            ],
            "Spring Web Services (Spring-WS)": [
                {
                    name: "WsSecurityException",
                    description: "Webサービスのセキュリティに関する問題が発生した場合にスローされる。",
                    solution: "Webサービスのセキュリティ設定を確認し、認証や暗号化が正しく行われているかチェックします。"
                },
                {
                    name: "WsTransportException",
                    description: "Webサービスのトランスポートレイヤーで問題が発生した場合にスローされる。",
                    solution: "トランスポート設定や接続設定を確認し、正しく接続されているかチェックします。"
                }
            ],
            "Spring LDAP (Lightweight Directory Access Protocol)": [
                {
                    name: "AttributeInUseException",
                    description: "LDAP属性が使用中の場合にスローされる。",
                    solution: "属性の使用状況を確認し、競合が発生しないようにします。"
                },
                {
                    name: "LdapException",
                    description: "LDAP操作に関する汎用的な例外。",
                    solution: "LDAPの設定や使用方法を確認し、エラーログを解析して原因を特定します。"
                },
                {
                    name: "NameNotFoundException",
                    description: "指定されたLDAP名前が見つからない場合にスローされる。",
                    solution: "LDAPの名前空間設定やエントリが正しいか確認し、名前解決が正しく行われるようにします。"
                }
            ],
            "Spring Reactor": [
                {
                    name: "OnErrorNotImplementedException",
                    description: "エラーが実装されていない場合にスローされる。",
                    solution: "エラーハンドリングロジックを実装し、エラーが適切に処理されるようにします。"
                },
                {
                    name: "ReactorException",
                    description: "Reactorの操作中に発生した汎用的な例外。",
                    solution: "Reactorの設定や使用方法を確認し、エラーログを解析して原因を特定します。"
                }
            ],
            "Spring R2DBC (Reactive Relational Database Connectivity)": [
                {
                    name: "ConnectionFactoryException",
                    description: "接続ファクトリの作成に失敗した場合にスローされる。",
                    solution: "接続ファクトリの設定や接続情報を確認し、ファクトリが正しく作成されるようにします。"
                },
                {
                    name: "R2dbcException",
                    description: "R2DBC操作に関する汎用的な例外。",
                    solution: "R2DBCの設定や使用方法を確認し、エラーログを解析して原因を特定します。"
                }
            ],
            "Spring HATEOAS (Hypermedia as the Engine of Application State)": [
                {
                    name: "AffordanceModelNotFoundException",
                    description: "指定されたアフォーダンスモデルが見つからない場合にスローされる。",
                    solution: "アフォーダンスモデルの設定や名前を確認し、正しく設定されているかチェックします。"
                },
                {
                    name: "LinkRelationNotFoundException",
                    description: "指定されたリンク関係が見つからない場合にスローされる。",
                    solution: "リンク関係の設定や名前を確認し、正しく設定されているかチェックします。"
                }
            ],
            "Spring Mobile": [
                {
                    name: "DeviceNotFoundException",
                    description: "デバイスの検出に失敗した場合にスローされる。",
                    solution: "デバイスの検出ロジックや設定を確認し、正しく検出されるようにします。"
                },
                {
                    name: "SitePreferenceNotFoundException",
                    description: "サイトの好みの検出に失敗した場合にスローされる。",
                    solution: "サイトの好みの設定や検出ロジックを確認し、正しく検出されるようにします。"
                }
            ],
            "Spring Social": [
                {
                    name: "ApiException",
                    description: "API操作に関する汎用的な例外。",
                    solution: "APIの設定や使用方法を確認し、エラーログを解析して原因を特定します。"
                },
                {
                    name: "SocialAuthenticationException",
                    description: "ソーシャル認証に失敗した場合にスローされる。",
                    solution: "ソーシャル認証の設定や使用方法を確認し、認証情報が正しいかチェックします。"
                }
            ],
            "Spring Cloud Config": [
                {
                    name: "ConfigServerException",
                    description: "コンフィグサーバーとのやり取りに失敗した場合にスローされる。",
                    solution: "コンフィグサーバーの設定や接続設定を確認し、エラーログを解析して原因を特定します。"
                },
                {
                    name: "EnvironmentNotFoundException",
                    description: "指定された環境が見つからない場合にスローされる。",
                    solution: "環境設定や名前を確認し、正しく設定されているかチェックします。"
                }
            ],
            "Spring Native": [
                {
                    name: "NativeConfigurationException",
                    description: "ネイティブコンフィギュレーションに失敗した場合にスローされる。",
                    solution: "ネイティブ設定や使用方法を確認し、エラーログを解析して原因を特定します。"
                }
            ],
            "Spring Actuator": [
                {
                    name: "EndpointNotFoundException",
                    description: "指定されたエンドポイントが見つからない場合にスローされる。",
                    solution: "エンドポイントの設定や名前を確認し、正しく設定されているかチェックします。"
                },
                {
                    name: "HealthCheckException",
                    description: "ヘルスチェックに失敗した場合にスローされる。",
                    solution: "ヘルスチェックの設定やロジックを確認し、正しくヘルスチェックが行われるようにします。"
                }
            ],
            "Spring WebFlow": [
                {
                    name: "FlowDefinitionException",
                    description: "フロー定義に関連する問題が発生した場合にスローされる。",
                    solution: "フロー定義の設定やロジックを確認し、エラーログを解析して原因を特定します。"
                },
                {
                    name: "FlowExecutionException",
                    description: "フローの実行中に発生した汎用的な例外。",
                    solution: "フローの実行ロジックや設定を確認し、エラーログを解析して原因を特定します。"
                },
                {
                    name: "NoSuchFlowException",
                    description: "指定されたフローが見つからない場合にスローされる。",
                    solution: "フローの設定や名前を確認し、正しく設定されているかチェックします。"
                }
            ],
            "Spring REST Docs": [
                {
                    name: "RestDocumentationException",
                    description: "RESTドキュメント生成中に発生した汎用的な例外。",
                    solution: "ドキュメント生成の設定やロジックを確認し、エラーログを解析して原因を特定します。"
                },
                {
                    name: "SnippetException",
                    description: "ドキュメントスニペットの生成中に発生した例外。",
                    solution: "ドキュメントスニペットの設定や生成ロジックを確認し、正しく生成されるようにします。"
                }
            ],
            "Spring WebClient": [
                {
                    name: "WebClientException",
                    description: "WebClientの操作中に発生した汎用的な例外。",
                    solution: "WebClientの設定や使用方法を確認し、エラーログを解析して原因を特定します。"
                },
                {
                    name: "WebClientRequestException",
                    description: "リクエストの送信中に発生した例外。",
                    solution: "リクエストの設定や送信ロジックを確認し、正しく送信されているかチェックします。"
                },
                {
                    name: "WebClientResponseException",
                    description: "レスポンスの処理中に発生した例外。",
                    solution: "レスポンスの設定や処理ロジックを確認し、正しく処理されているかチェックします。"
                }
            ],
            "Spring Retry": [
                {
                    name: "ExhaustedRetryException",
                    description: "リトライの回数が限界に達した場合にスローされる。",
                    solution: "リトライの設定やロジックを確認し、適切な回数に調整します。"
                },
                {
                    name: "RetryException",
                    description: "リトライ操作中に発生した汎用的な例外。",
                    solution: "リトライの設定や使用方法を確認し、エラーログを解析して原因を特定します。"
                }
            ],
            "Spring Validation": [
                {
                    name: "ConstraintViolationException",
                    description: "バリデーション制約違反が発生した場合にスローされる。",
                    solution: "バリデーション制約の設定やロジックを確認し、正しくバリデーションが行われるようにします。"
                },
                {
                    name: "MethodArgumentNotValidException",
                    description: "メソッド引数のバリデーションに失敗した場合にスローされる。",
                    solution: "メソッド引argumentのバリデーション設定や入力値を確認し、正しくバリデーションされるようにします。"
                }
            ],
            "Spring Mail": [
                {
                    name: "MailException",
                    description: "メール送信操作に関連する汎用的な例外。",
                    solution: "メール送信の設定やロジックを確認し、エラーログを解析して原因を特定します。"
                },
                {
                    name: "MailSendException",
                    description: "メールの送信に失敗した場合にスローされる。",
                    solution: "メールサーバーの設定や接続設定を確認し、正しく送信されるようにします。"
                }
            ],
            "Spring Integration Kafka": [
                {
                    name: "KafkaConsumerException",
                    description: "Kafkaのコンシューマ操作中に発生した例外。",
                    solution: "Kafkaのコンシューマ設定や接続設定を確認し、エラーログを解析して原因を特定します。"
                },
                {
                    name: "KafkaSendException",
                    description: "Kafkaへのメッセージ送信に失敗した場合にスローされる。",
                    solution: "Kafkaのメッセージ送信設定や接続設定を確認し、正しく送信されるようにします。"
                }
            ],
            "Spring Integration AMQP": [
                {
                    name: "AmqpConnectException",
                    description: "AMQPブローカーへの接続に失敗した場合にスローされる。",
                    solution: "AMQPの接続設定を確認し、正しく接続されるようにします。"
                },
                {
                    name: "AmqpIOException",
                    description: "AMQPのI/O操作中に発生した例外。",
                    solution: "AMQPのI/O操作の設定や接続設定を確認し、問題がないかチェックします。"
                }
            ],
            "Spring Integration JMS": [
                {
                    name: "JmsConnectException",
                    description: "JMSブローカーへの接続に失敗した場合にスローされる。",
                    solution: "JMSの接続設定を確認し、正しく接続されるようにします。"
                },
                {
                    name: "JmsException",
                    description: "JMS操作に関連する汎用的な例外。",
                    solution: "JMSの設定や使用方法を確認し、エラーログを解析して原因を特定します。"
                }
            ],
            "Spring Integration MQTT": [
                {
                    name: "MqttConnectException",
                    description: "MQTTブローカーへの接続に失敗した場合にスローされる。",
                    solution: "MQTTの接続設定を確認し、正しく接続されるようにします。"
                },
                {
                    name: "MqttException",
                    description: "MQTT操作に関連する汎用的な例外。",
                    solution: "MQTTの設定や使用方法を確認し、エラーログを解析して原因を特定します。"
                }
            ],
            "Spring Integration Redis": [
                {
                    name: "RedisConnectionException",
                    description: "Redisへの接続に失敗した場合にスローされる。",
                    solution: "Redisの接続設定を確認し、正しく接続されるようにします。"
                },
                {
                    name: "RedisDataException",
                    description: "Redisデータ操作中に発生した例外。",
                    solution: "Redisの設定や使用方法を確認し、エラーログを解析して原因を特定します。"
                }
            ],
            "Spring Integration RSocket": [
                {
                    name: "RSocketConnectException",
                    description: "RSocket接続に失敗した場合にスローされる。",
                    solution: "RSocketの接続設定を確認し、正しく接続されるようにします。"
                },
                {
                    name: "RSocketMessageHandlingException",
                    description: "RSocketメッセージ処理中に発生した例外。",
                    solution: "RSocketのメッセージ処理設定やロジックを確認し、エラーログを解析して原因を特定します。"
                }
            ],
            "Spring Security OAuth2": [
                {
                    name: "InvalidTokenException",
                    description: "無効なトークンが提供された場合にスローされる。",
                    solution: "トークンの生成と管理が正しく行われているか確認し、無効なトークンが使われていないかチェックします。"
                },
                {
                    name: "OAuth2AuthenticationException",
                    description: "OAuth2認証に失敗した場合にスローされる。",
                    solution: "OAuth2の設定や認証フローを確認し、認証情報が正しいかチェックします。"
                }
            ],
            "Spring Social Facebook": [
                {
                    name: "FacebookException",
                    description: "Facebook API操作中に発生した汎用的な例外。",
                    solution: "Facebook APIの設定や使用方法を確認し、エラーログを解析して原因を特定します。"
                },
                {
                    name: "MissingAuthorizationException",
                    description: "Facebook API呼び出しに必要な認証情報が不足している場合にスローされる。",
                    solution: "Facebook APIの認証情報が正しく設定されているか確認し、必要な情報が提供されているかチェックします。"
                }
            ],
            "Spring Social Twitter": [
                {
                    name: "RateLimitExceededException",
                    description: "Twitter APIのレート制限を超えた場合にスローされる。",
                    solution: "Twitter APIの使用頻度を確認し、レート制限を超えないようにします。"
                },
                {
                    name: "TwitterException",
                    description: "Twitter API操作中に発生した汎用的な例外。",
                    solution: "Twitter APIの設定や使用方法を確認し、エラーログを解析して原因を特定します。"
                },
            ]
    };

    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const categoryList = document.getElementById('category-list');
    const exceptionDetail = document.getElementById('exception-detail');
    const scrollToTopBtn = document.getElementById('scroll-to-top-btn');
    const exportTextBtn = document.getElementById('export-text-btn');

    // カテゴリーリストの表示
    function displayCategories() {
        categoryList.innerHTML = '';
        Object.keys(exceptions).forEach(category => {
            const li = document.createElement('li');
            li.classList.add('list-group-item', 'category-item');
            li.textContent = category;
            li.addEventListener('click', () => displayExceptions(category));
            categoryList.appendChild(li);
        });
    }

    // 例外リストの表示
    function displayExceptions(category) {
        const exceptionList = exceptions[category];
        exceptionDetail.innerHTML = '<h3>' + category + '</h3>';
        exceptionList.forEach(exception => {
            const div = document.createElement('div');
            div.classList.add('exception-item');
            div.innerHTML = `
                <h4>${exception.name}</h4>
                <p>${exception.description}</p>
                <h5>対策</h5>
                <p>${exception.solution}</p>
            `;
            div.addEventListener('click', () => displayExceptionDetail(exception));
            exceptionDetail.appendChild(div);
        });
    }

    // 例外の詳細表示
    function displayExceptionDetail(exception) {
        exceptionDetail.innerHTML = `
            <h3>${exception.name}</h3>
            <p>${exception.description}</p>
            <h4>対策</h4>
            <p>${exception.solution}</p>
        `;
    }

    // 検索機能
    searchBtn.addEventListener('click', () => {
        const query = searchInput.value.toLowerCase();
        let found = false;
        exceptionDetail.innerHTML = '<h3>検索結果</h3>';
        Object.keys(exceptions).forEach(category => {
            exceptions[category].forEach(exception => {
                if (exception.name.toLowerCase().startsWith(query)) {
                    found = true;
                    const div = document.createElement('div');
                    div.classList.add('exception-item');
                    div.innerHTML = `
                        <h4>${exception.name}</h4>
                        <p>${exception.description}</p>
                        <h5>対策</h5>
                        <p>${exception.solution}</p>
                    `;
                    div.addEventListener('click', () => displayExceptionDetail(exception));
                    exceptionDetail.appendChild(div);
                }
            });
        });
        if (!found) {
            exceptionDetail.innerHTML += '<p>検索結果が見つかりませんでした。</p>';
        }
    });

    // スクロールトップボタンの表示
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    // スクロールトップ機能
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // テキスト出力機能
    exportTextBtn.addEventListener('click', () => {
        let txtContent = '';

        Object.keys(exceptions).forEach(category => {
            exceptions[category].forEach(exception => {
                txtContent += `エラー名: ${exception.name}\n`;
                txtContent += `ユーザー解決方法: ${exception.solution}\n\n`;
            });
        });

        const blob = new Blob([txtContent], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'UserSolutions.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });

    // テキスト出力機能
    exportTextBtn.addEventListener('click', () => {
        let txtContent = '';

        Object.keys(exceptions).forEach(category => {
            exceptions[category].forEach(exception => {
                txtContent += `エラー名: ${exception.name}\n`;
                txtContent += `ユーザー解決方法: ${exception.solution}\n\n`;
            });
        });

        const blob = new Blob([txtContent], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'UserSolutions.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });


    // カテゴリー表示初期化
    displayCategories();
});